/**
 * GEAR mobile/UX audit harness.
 *
 * Usage:
 *   npm run build          # tsc + vite build -> dist/
 *   node scripts/audit.mjs # runs checks against dist via `vite preview`
 *
 * Outputs:
 *   audit/out/report.json  # machine-readable findings
 *   audit/out/shots/*.png  # screenshots per width + per section
 *
 * Checks: horizontal overflow, clipped content, tap-target sizes,
 * console/network errors, mobile menu behaviour (open/Escape/link/back),
 * anchor landing vs fixed header, reduced-motion animation state,
 * JS-disabled fallback.
 */
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'audit/out');
const SHOTS = resolve(OUT, 'shots');
const PORT = 4174;
const BASE = `http://localhost:${PORT}/`;
const CHROME =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const WIDTHS = [
  { w: 320, h: 568 },
  { w: 360, h: 740 },
  { w: 375, h: 812 },
  { w: 390, h: 844 },
  { w: 414, h: 896 },
  { w: 430, h: 932 },
  { w: 768, h: 1024 },
  { w: 1024, h: 800 },
  { w: 1440, h: 900 },
];

const MIN_TARGET = 44;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (!existsSync(resolve(ROOT, 'dist/index.html'))) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}
mkdirSync(SHOTS, { recursive: true });

const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: ROOT,
  stdio: 'ignore',
});
process.on('exit', () => preview.kill());
process.on('SIGINT', () => process.exit(0));

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE);
      if (r.ok) return;
    } catch {}
    await sleep(250);
  }
  throw new Error('vite preview did not start');
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-first-run', '--disable-gpu', '--font-render-hinting=none'],
});
await waitForServer();

const report = { generatedAt: new Date().toISOString(), widths: {}, menu: {}, a11y: {}, errors: [] };

const page = await browser.newPage();
page.on('console', (m) => {
  if (m.type() === 'error' || m.type() === 'warning')
    report.errors.push(`[console.${m.type()}] ${m.text()}`);
});
page.on('pageerror', (e) => report.errors.push(`[pageerror] ${e.message}`));
page.on('requestfailed', (r) => {
  if (!r.url().includes('favicon')) report.errors.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`);
});

const COLLECT = `(() => {
  const doc = document.documentElement;
  const vw = doc.clientWidth;
  const overflow = [];
  const clipped = [];
  const small = [];
  const mockSmall = [];
  const MOCK_MIN = 24; // WCAG 2.5.8 AA for illustrative in-card widgets
  const interactive = 'a, button, input, select, textarea, [role="button"], [role="tab"]';
  for (const el of document.querySelectorAll('body *')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    if (r.right > vw + 1.5 || r.left < -1.5) {
      overflow.push({
        tag: el.tagName.toLowerCase(),
        cls: (typeof el.className === 'string' ? el.className : '').slice(0, 100),
        left: Math.round(r.left), right: Math.round(r.right),
      });
    }
    const ox = cs.overflowX, oy = cs.overflowY;
    if ((ox === 'hidden' || ox === 'clip') && el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      clipped.push({ axis: 'x', tag: el.tagName.toLowerCase(), cls: (typeof el.className==='string'?el.className:'').slice(0,100), scrollW: el.scrollWidth, clientW: el.clientWidth });
    }
    if ((oy === 'hidden' || oy === 'clip') && el.scrollHeight > el.clientHeight + 2 && el.clientHeight > 0) {
      clipped.push({ axis: 'y', tag: el.tagName.toLowerCase(), cls: (typeof el.className==='string'?el.className:'').slice(0,100), scrollH: el.scrollHeight, clientH: el.clientHeight });
    }
  }
  for (const el of document.querySelectorAll(interactive)) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue;
    if (el.closest('[aria-hidden="true"]') || el.closest('[inert]')) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const inMock = !!el.closest('[data-mock]');
    const min = inMock ? MOCK_MIN : ${MIN_TARGET};
    if (r.height < min || r.width < min) {
      const entry = {
        tag: el.tagName.toLowerCase(),
        txt: (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\\s+/g, ' ').slice(0, 46),
        w: Math.round(r.width), h: Math.round(r.height),
      };
      if (inMock) mockSmall.push(entry);
      else small.push(entry);
    }
  }
  const hdr = document.querySelector('header');
  return JSON.stringify({
    clientW: vw,
    scrollW: doc.scrollWidth,
    bodyScrollW: document.body.scrollWidth,
    pageH: doc.scrollHeight,
    headerH: hdr ? Math.round(hdr.getBoundingClientRect().height) : 0,
    overflow: overflow.slice(0, 40),
    overflowCount: overflow.length,
    clipped: clipped.slice(0, 40),
    clippedCount: clipped.length,
    smallCount: small.length,
    small: small.slice(0, 60),
    mockSmallCount: mockSmall.length,
    mockSmall: mockSmall.slice(0, 40),
    sections: [...document.querySelectorAll('main section, footer')].map((s) => ({
      id: s.id || s.tagName.toLowerCase(),
      h: Math.round(s.getBoundingClientRect().height),
    })),
    hero: (() => {
      const hero = document.getElementById('hero');
      const cta = document.querySelector('#hero .action-col a[href^="http"]');
      const cr = cta ? cta.getBoundingClientRect() : null;
      return {
        h: hero ? Math.round(hero.getBoundingClientRect().height) : 0,
        ctaTop: cr ? Math.round(cr.top + window.scrollY) : null,
        ctaInFirstViewport: cr ? cr.top + window.scrollY < window.innerHeight - 10 : null,
      };
    })(),
  });
})()`;

async function collect() {
  const r = await page.evaluate(COLLECT);
  return JSON.parse(r);
}

async function settle(ms = 900) {
  await sleep(ms);
}

// ---------------------------------------------------------------- widths
for (const { w, h } of WIDTHS) {
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 1, isMobile: w < 800, hasTouch: w < 800 });
  await page.goto(BASE, { waitUntil: 'networkidle0' });
  await settle(1200);
  report.widths[w] = await collect();
  await page.screenshot({ path: resolve(SHOTS, `w${w}-top.png`) });
}

// ------------------------------------------------------- section shots @375
await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
await page.goto(BASE, { waitUntil: 'networkidle0' });
await settle(1000);
const sectionIds = await page.evaluate(() =>
  [...document.querySelectorAll('main section, footer')].map((s) => s.id).filter(Boolean)
);
for (const id of sectionIds) {
  await page.evaluate((i) => {
    const el = document.getElementById(i);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'instant' });
  }, id);
  await settle(700);
  await page.screenshot({ path: resolve(SHOTS, `m375-${id}.png`) });
}

// ------------------------------------------------------------- menu behaviour
{
  const m = {};
  await page.evaluate(() => window.scrollTo(0, 0));
  await settle(400);
  const toggle = 'header button[aria-expanded]';
  await page.click(toggle);
  await settle(600);
  m.open = await page.evaluate(() => {
    const d = document.querySelector('[role="dialog"]');
    const cs = d ? getComputedStyle(d) : null;
    return JSON.stringify({
      ariaExpanded: document.querySelector('header button[aria-expanded]')?.getAttribute('aria-expanded'),
      bodyOverflow: document.body.style.overflow,
      docOverflow: document.documentElement.style.overflow,
      dialogVisible: cs ? cs.opacity === '1' && cs.visibility !== 'hidden' : false,
      focusInDialog: d ? d.contains(document.activeElement) : false,
      active: document.activeElement?.tagName + ':' + (document.activeElement?.innerText || '').trim().slice(0, 30),
      bodyScrollY: window.scrollY,
    });
  });
  m.open = JSON.parse(m.open);
  await page.screenshot({ path: resolve(SHOTS, `m375-menu.png`) });

  // focus trap: Tab 18 times, focus must remain inside the dialog
  let escaped = 0;
  for (let i = 0; i < 18; i++) {
    await page.keyboard.press('Tab');
    const inside = await page.evaluate(() => {
      const d = document.querySelector('[role="dialog"]');
      const hd = document.querySelector('header');
      const a = document.activeElement;
      return !!a && !!d && (d.contains(a) || hd.contains(a));
    });
    if (!inside) escaped++;
  }
  m.focusTrapEscapes = escaped;

  await page.keyboard.press('Escape');
  await settle(500);
  m.afterEscape = await page.evaluate(() => ({
    ariaExpanded: document.querySelector('header button[aria-expanded]')?.getAttribute('aria-expanded'),
    bodyOverflow: document.body.style.overflow,
    focusOnToggle: document.activeElement === document.querySelector('header button[aria-expanded]'),
    dialogVisible: (() => { const d = document.querySelector('[role="dialog"]'); if (!d) return null; const cs = getComputedStyle(d); return cs.opacity === '1' && cs.visibility !== 'hidden'; })(),
  }));

  // close on link click + anchor landing vs header
  await page.click(toggle);
  await settle(500);
  await page.evaluate(() => {
    const a = [...document.querySelectorAll('[role="dialog"] a[href^="#"]')].find((x) => x.getAttribute('href') === '#solucoes');
    a?.click();
  });
  await settle(1500);
  m.linkClick = await page.evaluate(() => {
    const hdr = document.querySelector('header');
    const sec = document.getElementById('solucoes');
    const d = document.querySelector('[role="dialog"]');
    const cs = d ? getComputedStyle(d) : null;
    return JSON.stringify({
      hash: location.hash,
      dialogClosed: cs ? cs.opacity !== '1' || cs.visibility === 'hidden' : null,
      bodyOverflow: document.body.style.overflow,
      sectionTop: sec ? Math.round(sec.getBoundingClientRect().top) : null,
      headerH: hdr ? Math.round(hdr.getBoundingClientRect().height) : 0,
      covered: sec ? sec.getBoundingClientRect().top < (hdr?.getBoundingClientRect().height || 0) - 2 : null,
    });
  });
  m.linkClick = JSON.parse(m.linkClick);

  // back button closes the menu
  await page.click(toggle);
  await settle(500);
  const openBeforeBack = await page.evaluate(() => document.querySelector('header button[aria-expanded]')?.getAttribute('aria-expanded'));
  await page.goBack().catch(() => {});
  await settle(700);
  m.backButton = {
    openBeforeBack,
    openAfterBack: await page.evaluate(() => document.querySelector('header button[aria-expanded]')?.getAttribute('aria-expanded')),
  };

  // every anchor target reachable below header
  await page.evaluate(() => window.scrollTo(0, 0));
  await settle(300);
  m.anchors = await page.evaluate(() => {
    const out = [];
    const hdrH = document.querySelector('header')?.getBoundingClientRect().height || 0;
    for (const a of document.querySelectorAll('a[href^="#"]')) {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) { out.push({ href: a.getAttribute('href'), missing: true }); continue; }
    }
    return JSON.stringify({ missing: out, hdrH: Math.round(hdrH) });
  });
  m.anchors = JSON.parse(m.anchors);
  report.menu = m;
}

// ---------------------------------------------------------- reduced motion
{
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await page.goto(BASE, { waitUntil: 'networkidle0' });
  await settle(1500);
  report.a11y.reducedMotion = await page.evaluate(() => {
    const running = document.getAnimations().filter((a) => a.playState === 'running');
    return {
      runningAnimations: running.length,
      sample: running.slice(0, 6).map((a) => a.animationName || a.constructor.name),
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    };
  });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
}

// -------------------------------------------------------------- JS disabled
{
  const p2 = await browser.newPage();
  await p2.setJavaScriptEnabled(false);
  await p2.setViewport({ width: 375, height: 812 });
  await p2.goto(BASE, { waitUntil: 'domcontentloaded' });
  await sleep(600);
  report.a11y.noJs = await p2.evaluate(() => ({
    bodyTextLength: (document.body.innerText || '').trim().length,
    hasNoscript: !!document.querySelector('noscript'),
    rootChildren: document.getElementById('root')?.children.length || 0,
  }));
  await p2.screenshot({ path: resolve(SHOTS, 'm375-nojs.png') });
  await p2.close();
}

writeFileSync(resolve(OUT, 'report.json'), JSON.stringify(report, null, 2));

// --------------------------------------------------------------- summary
const summary = {};
for (const [w, d] of Object.entries(report.widths)) {
  summary[w] = {
    overflow: d.overflowCount,
    clipped: d.clippedCount,
    smallTargets: d.smallCount,
    scrollW: d.scrollW,
    clientW: d.clientW,
  };
}
console.log('== widths ==');
console.table(summary);
console.log('== menu ==');
console.log(JSON.stringify(report.menu, null, 2));
console.log('== a11y ==');
console.log(JSON.stringify(report.a11y, null, 2));
console.log('== errors ==');
console.log([...new Set(report.errors)].join('\n') || '(none)');
console.log(`\nreport: ${resolve(OUT, 'report.json')}\nshots:  ${SHOTS}`);

await browser.close();
preview.kill();
process.exit(0);
