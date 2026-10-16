import React, { useEffect, useRef, useState } from 'react';
import { WHATSAPP_URL } from '../data/config';

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
      const k = w.manual ? 1.6 : 1;
      const chars: WordChar[] = w.text.split('').map((char) => ({
        c: char,
        x: ((Math.random() * 2 - 1) * 90 * k).toFixed(0) + 'px',
        y: ((Math.random() * 2 - 1) * 70 * k).toFixed(0) + 'px',
        r: ((Math.random() * 2 - 1) * 28 * k).toFixed(0) + 'deg',
        i: globalIdx++,
      }));
      return { text: w.text, manual: w.manual, chars };
    });

    setWords(generated);

    // Initial organizing animation after 500ms
    const timer = setTimeout(() => {
      setOrdered(true);
    }, 500);

    // Mousemove parallax for figure layers
    const handleMouseMove = (e: MouseEvent) => {
      if (!figRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      const layers = figRef.current.querySelectorAll<SVGGElement>('g[data-d]');
      layers.forEach((g) => {
        const d = parseFloat(g.dataset.d || '0');
        g.style.transform = `translate(${x * d * -1.6}px, ${y * d * -1.6}px)`;
      });
    };

    // Scroll parallax for figure
    const handleScroll = () => {
      if (!figRef.current) return;
      figRef.current.style.transform = `translateY(${window.scrollY * 0.18}px) rotate(${
        window.scrollY * 0.01
      }deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
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
              x: ((Math.random() * 2 - 1) * 90 * k).toFixed(0) + 'px',
              y: ((Math.random() * 2 - 1) * 70 * k).toFixed(0) + 'px',
              r: ((Math.random() * 2 - 1) * 28 * k).toFixed(0) + 'deg',
            })),
          };
        })
      );
    }
    setOrdered(!ordered);
  };

  return (
    <section className="hero" id="hero">
      <div className="fig" id="fig" ref={figRef} aria-hidden="true">
        <svg viewBox="-40 -40 580 620">
          <g
            data-d="-8"
            fill="none"
            stroke="rgba(236,234,228,.22)"
            strokeWidth="1"
            transform="translate(28 26)"
          >
            <polygon points="10,165 285,5 390,55 110,215" />
            <polygon points="5,170 110,215 110,350 5,410" />
            <polygon points="5,410 110,355 240,432 145,487" />
            <polygon points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295" />
          </g>
          <g data-d="10">
            <polygon fill="#2D63FF" points="10,165 285,5 390,55 110,215" />
          </g>
          <g data-d="22">
            <polygon fill="#1A3FE0" points="5,170 110,215 110,350 5,410" />
          </g>
          <g data-d="34">
            <polygon fill="#4C80FF" points="5,410 110,355 240,432 145,487" />
          </g>
          <g data-d="16">
            <polygon
              fill="#6C93FF"
              points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295"
            />
          </g>
          <g stroke="rgba(236,234,228,.5)" strokeWidth="1">
            <path d="M-30 -30h22M-30 -30v22M530 -30h-22M530 -30v22M-30 570h22M-30 570v-22M530 570h-22M530 570v-22" />
          </g>
        </svg>
      </div>

      <div className="idx mono">SW · IA · AUT · DASH · WEB · SIS · APP</div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-wrap">
          <div className="meta mono">
            <span>(01) — Estúdio de software &amp; automação</span>
            <span>Fig. 01 — o caos, organizado</span>
          </div>

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
                      className="ch"
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
                <span key={wIdx} className="w manual" aria-hidden="true">
                  {w.chars.map((ch) => (
                    <span
                      key={ch.i}
                      className="ch"
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

          <div className="mega2">
            Mais inteligência<br />
            para crescer.
          </div>
        </div>
      </div>

      <button
        className="shuffle mono"
        id="shuffle"
        data-cursor
        onClick={handleShuffleClick}
      >
        ↻ <span id="shtxt">{ordered ? 'bagunçar' : 'organizar'}</span>
      </button>

      <div className="wrap">
        <div className="hero-foot">
          <p>
            Software, IA e automação sob medida para quem cansou da planilha que só uma pessoa
            entende.
          </p>
          <div className="ctas">
            <a className="ghost mono" href="#casos" data-cursor>
              Ver como funciona ↓
            </a>
            <a
              className="btn"
              data-cursor
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contar meu problema <span className="arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
