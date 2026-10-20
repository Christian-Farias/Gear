import React, { useEffect, useRef, useState } from 'react';
import { WHATSAPP_URL } from '../data/config';
import { ArrowDown, ArrowUpRight, RefreshCw, CheckCircle2 } from 'lucide-react';

interface WordChar {
  c: string;
  x: string;
  y: string;
  r: string;
  i: number;
}

const Hero: React.FC = () => {
  const [ordered, setOrdered] = useState(false);
  const [words, setWords] = useState<{ text: string; manual: boolean; chars: WordChar[] }[]>([]);
  const figRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rawWords = [
      { text: 'Menos', manual: false },
      { text: 'tarefas', manual: false },
      { text: 'manuais.', manual: true },
    ];

    let globalIdx = 0;
    const generated = rawWords.map((w) => {
      const k = w.manual ? 1.5 : 1;
      const chars: WordChar[] = w.text.split('').map((char) => ({
        c: char,
        x: ((Math.random() * 2 - 1) * 80 * k).toFixed(0) + 'px',
        y: ((Math.random() * 2 - 1) * 60 * k).toFixed(0) + 'px',
        r: ((Math.random() * 2 - 1) * 24 * k).toFixed(0) + 'deg',
        i: globalIdx++,
      }));
      return { text: w.text, manual: w.manual, chars };
    });

    setWords(generated);

    // Initial organizing animation after 600ms
    const timer = setTimeout(() => {
      setOrdered(true);
    }, 600);

    // Smooth mouse parallax with lerp for figure layers (desktop only)
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (figRef.current) {
        const layers = figRef.current.querySelectorAll<SVGGElement>('g[data-d]');
        layers.forEach((g) => {
          const d = parseFloat(g.dataset.d || '0');
          g.style.transform = `translate3d(${currentX * d * -1.8}px, ${currentY * d * -1.8}px, 0)`;
        });
      }
      rafId = requestAnimationFrame(updateParallax);
    };

    // Scroll parallax for figure
    const handleScroll = () => {
      if (!figRef.current) return;
      const scrollY = window.scrollY;
      figRef.current.style.transform = `translate3d(0, ${scrollY * 0.14}px, 0) rotate(${scrollY * 0.006}deg)`;
    };

    if (hasFinePointer) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      rafId = requestAnimationFrame(updateParallax);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShuffleClick = () => {
    if (ordered) {
      setWords((prev) =>
        prev.map((w) => {
          const k = w.manual ? 1.6 : 1;
          return {
            ...w,
            chars: w.chars.map((char) => ({
              ...char,
              x: ((Math.random() * 2 - 1) * 85 * k).toFixed(0) + 'px',
              y: ((Math.random() * 2 - 1) * 65 * k).toFixed(0) + 'px',
              r: ((Math.random() * 2 - 1) * 26 * k).toFixed(0) + 'deg',
            })),
          };
        })
      );
    }
    setOrdered(!ordered);
  };

  return (
    <section className="hero relative min-h-[100svh] pt-28 md:pt-36 pb-12 flex flex-col justify-between overflow-hidden" id="hero">
      {/* Ambient background volumetric glow */}
      <div 
        className="absolute top-1/4 -right-[15vw] w-[65vw] max-w-[850px] aspect-square rounded-full bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-transparent blur-[130px] pointer-events-none -z-10 animate-pulse-slow"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-[-10vw] w-[45vw] max-w-[600px] aspect-square rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-transparent blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 3D Polygon Emblem Sculpture with HUD Telemetry */}
      <div className="fig" id="fig" ref={figRef} aria-hidden="true">
        <svg viewBox="-40 -40 580 620" className="w-full h-auto overflow-visible drop-shadow-[0_20px_50px_rgba(37,99,235,0.25)]">
          <defs>
            <linearGradient id="heroLayerA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="heroLayerB" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="heroLayerC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="heroLayerD" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Wireframe shadow echo */}
          <g
            data-d="-8"
            fill="none"
            stroke="rgba(241,239,234,0.18)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            transform="translate(28 26)"
          >
            <polygon points="10,165 285,5 390,55 110,215" />
            <polygon points="5,170 110,215 110,350 5,410" />
            <polygon points="5,410 110,355 240,432 145,487" />
            <polygon points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295" />
          </g>

          {/* Main 3D multi-layered faceted geometric shards */}
          <g data-d="12" className="transition-transform duration-300 ease-out">
            <polygon fill="url(#heroLayerA)" points="10,165 285,5 390,55 110,215" />
            <polygon fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" points="10,165 285,5 390,55 110,215" />
          </g>
          <g data-d="24" className="transition-transform duration-300 ease-out">
            <polygon fill="url(#heroLayerB)" points="5,170 110,215 110,350 5,410" />
            <polygon fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.75" points="5,170 110,215 110,350 5,410" />
          </g>
          <g data-d="36" className="transition-transform duration-300 ease-out">
            <polygon fill="url(#heroLayerC)" points="5,410 110,355 240,432 145,487" />
            <polygon fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" points="5,410 110,355 240,432 145,487" />
          </g>
          <g data-d="18" className="transition-transform duration-300 ease-out">
            <polygon
              fill="url(#heroLayerD)"
              points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295"
            />
            <polygon
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="0.75"
              points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295"
            />
          </g>

          {/* Architectural engineering registration marks */}
          <g stroke="rgba(241,239,234,0.4)" strokeWidth="1.2">
            <path d="M-30 -30h24M-30 -30v24M530 -30h-24M530 -30v24M-30 570h24M-30 570v-24M530 570h-24M530 570v-24" />
          </g>
        </svg>
      </div>

      {/* Vertical engineering telemetry index */}
      <div className="idx mono tracking-widest hidden xl:block opacity-60 hover:opacity-100 transition-opacity">
        ENG · IA · AUTOMAÇÃO · DASHBOARDS · WEB · SAAS
      </div>

      {/* Main Hero Container */}
      <div className="wrap relative z-10">
        <div className="hero-wrap">
          {/* Metadata bar */}
          <div className="meta mono flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-zinc-400 mb-6 md:mb-10 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-semibold">(01)</span>
              <span>— Estúdio de software, IA &amp; automação</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px]">
                ED. 2025/2026
              </span>
              <span className="text-zinc-500">Fig. 01 — o caos, organizado</span>
            </div>
          </div>

          {/* Mega Headline with Kinetic Scatter Animation */}
          <h1
            className={`mega ${ordered ? 'ordered' : ''}`}
            id="mega"
            aria-label="Menos tarefas manuais."
          >
            <span className="line">
              {words.slice(0, 2).map((w, wIdx) => (
                <span key={wIdx} className="w" aria-hidden="true">
                  {w.chars.map((ch) => (
                    <span
                      key={ch.i}
                      className="ch inline-block"
                      style={{
                        ['--x' as any]: ch.x,
                        ['--y' as any]: ch.y,
                        ['--r' as any]: ch.r,
                        ['--i' as any]: ch.i,
                      }}
                    >
                      {ch.c}
                    </span>
                  ))}
                </span>
              ))}
            </span>

            <span className="line">
              {words.slice(2).map((w, wIdx) => (
                <span key={wIdx} className="w manual relative" aria-hidden="true">
                  {w.chars.map((ch) => (
                    <span
                      key={ch.i}
                      className="ch inline-block"
                      style={{
                        ['--x' as any]: ch.x,
                        ['--y' as any]: ch.y,
                        ['--r' as any]: ch.r,
                        ['--i' as any]: ch.i,
                      }}
                    >
                      {ch.c}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          {/* Poetic Editorial Counterpoint */}
          <div className="mega2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white drop-shadow-[0_4px_24px_rgba(59,130,246,0.3)]">
            Mais inteligência<br />
            para crescer.
          </div>

          {/* Interactive Chaos/Order Tactile Controller (Integrated in layout) */}
          <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
            <button
              className="mono group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-blue-400/50 backdrop-blur-md text-zinc-300 hover:text-white transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              id="shuffle"
              data-cursor
              onClick={handleShuffleClick}
              aria-label={ordered ? 'Desorganizar caracteres' : 'Organizar caracteres'}
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-400 transition-transform duration-500 ${ordered ? 'rotate-180' : 'rotate-0'}`} />
              <span id="shtxt" className="text-[11px] uppercase tracking-wider font-medium">
                {ordered ? 'Simular o caos' : 'Organizar o fluxo'}
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            </button>

            <span className="mono text-[11px] text-zinc-400">
              {ordered ? '● 0 tarefas manuais bloqueando a operação' : '○ 18 tarefas fragmentadas em planilhas'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Foot with Narrative & High-Converting CTAs */}
      <div className="wrap relative z-10 mt-8 md:mt-12">
        <div className="hero-foot pt-6 border-t border-white/[0.08]">
          <div className="space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl">
              Software sob medida, IA e automações que substituem planilhas frágeis por{' '}
              <strong className="text-white font-medium">processos autônomos, precisos e escaláveis</strong>.
            </p>

            {/* Technical Proof Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] mono text-zinc-400">
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                Sem mensalidades abusivas
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] mono text-zinc-400">
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                Código 100% de sua propriedade
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] mono text-zinc-400">
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                Entrega em sprints contínuos
              </span>
            </div>
          </div>

          <div className="ctas flex flex-wrap items-center gap-4 mt-6 lg:mt-0">
            <a
              className="ghost mono inline-flex items-center gap-2 py-3 px-4 text-xs tracking-wider text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white"
              href="#casos"
              data-cursor
            >
              <span>Ver casos reais</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>

            <a
              className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm md:text-base transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_45px_rgba(37,99,235,0.7)] hover:scale-[1.02] active:scale-[0.98] border border-blue-400/40"
              data-cursor
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Contar meu gargalo operacional</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
