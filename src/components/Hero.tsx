import React, { useEffect, useRef, useState } from 'react';
import { WHATSAPP_URL } from '../data/config';
import { ArrowDown, ArrowUpRight, Sliders, CheckCircle2 } from 'lucide-react';

// Static hero words — defined at module level so they exist on first render
// The kinetic scatter animation enhances presentation; content is never animation-dependent
const STATIC_WORDS = [
  { text: 'Menos', line: 0 },
  { text: 'tarefas', line: 0 },
  { text: 'manuais.', line: 1, isManual: true },
];

interface WordChar {
  c: string;
  x: string;
  y: string;
  r: string;
  i: number;
}

interface AnimatedWord {
  text: string;
  line: number;
  isManual?: boolean;
  chars: WordChar[];
}

function buildWords(): AnimatedWord[] {
  let globalIdx = 0;
  return STATIC_WORDS.map((w) => {
    const k = w.isManual ? 1.5 : 1;
    const chars: WordChar[] = w.text.split('').map((char) => ({
      c: char,
      x: ((Math.random() * 2 - 1) * 80 * k).toFixed(0) + 'px',
      y: ((Math.random() * 2 - 1) * 60 * k).toFixed(0) + 'px',
      r: ((Math.random() * 2 - 1) * 24 * k).toFixed(0) + 'deg',
      i: globalIdx++,
    }));
    return { ...w, chars };
  });
}

const Hero: React.FC = () => {
  const [ordered, setOrdered] = useState(false);
  const [words, setWords] = useState<AnimatedWord[]>(() => buildWords());
  const figRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Automatically trigger alignment into ordered precision state
    const timer = setTimeout(() => {
      setOrdered(true);
    }, 650);

    // Smooth mouse parallax for geometric elements
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (figRef.current) {
        const layers = figRef.current.querySelectorAll<SVGGElement>('g[data-d]');
        layers.forEach((g) => {
          const d = parseFloat(g.dataset.d || '0');
          g.style.transform = `translate3d(${currentX * d * -1.4}px, ${currentY * d * -1.4}px, 0)`;
        });
      }
      rafId = requestAnimationFrame(updateParallax);
    };

    // Scroll parallax for figure
    const handleScroll = () => {
      if (!figRef.current) return;
      const scrollY = window.scrollY;
      figRef.current.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
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

  const handleToggleCalibration = () => {
    if (ordered) {
      setWords((prev) =>
        prev.map((w) => {
          const k = w.isManual ? 1.6 : 1;
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

  const line0 = words.filter((w) => w.line === 0);
  const line1 = words.filter((w) => w.line === 1);

  return (
    <section 
      className="hero relative min-h-[100svh] pt-28 md:pt-36 pb-14 flex flex-col justify-between overflow-hidden bg-[#05070B]" 
      id="hero"
      aria-label="Abertura GEAR — Engenharia de Software e Automação"
    >
      {/* Precision Chiaroscuro Lighting (Architectural, directional, no generic glowing blobs) */}
      <div 
        className="absolute top-0 right-1/4 w-[50vw] max-w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-10 w-[35vw] max-w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.8),transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 3D Kinetic Architectural Polygon Emblem */}
      <div className="fig" id="fig" ref={figRef} aria-hidden="true">
        <svg 
          viewBox="-40 -40 580 620" 
          className="w-full h-auto overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        >
          <defs>
            <linearGradient id="heroLayerA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="heroLayerB" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="heroLayerC" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="heroLayerD" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Wireframe shadow blueprint echo */}
          <g
            data-d="-8"
            fill="none"
            stroke="rgba(236,234,228,0.12)"
            strokeWidth="1"
            strokeDasharray="3 3"
            transform="translate(24 22)"
          >
            <polygon points="10,165 285,5 390,55 110,215" />
            <polygon points="5,170 110,215 110,350 5,410" />
            <polygon points="5,410 110,355 240,432 145,487" />
            <polygon points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295" />
          </g>

          {/* Precision Architectural Facets */}
          <g data-d="12" className="transition-transform duration-300 ease-out">
            <polygon fill="url(#heroLayerA)" points="10,165 285,5 390,55 110,215" />
            <polygon fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" points="10,165 285,5 390,55 110,215" />
          </g>
          <g data-d="24" className="transition-transform duration-300 ease-out">
            <polygon fill="url(#heroLayerB)" points="5,170 110,215 110,350 5,410" />
            <polygon fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" points="5,170 110,215 110,350 5,410" />
          </g>
          <g data-d="36" className="transition-transform duration-300 ease-out">
            <polygon fill="url(#heroLayerC)" points="5,410 110,355 240,432 145,487" />
            <polygon fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" points="5,410 110,355 240,432 145,487" />
          </g>
          <g data-d="18" className="transition-transform duration-300 ease-out">
            <polygon
              fill="url(#heroLayerD)"
              points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295"
            />
            <polygon
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="0.8"
              points="205,280 340,196 485,196 500,210 500,390 485,402 245,538 145,487 235,432 390,340 395,325 395,295 370,280 270,335 205,295"
            />
          </g>

          {/* Technical Alignment Crosshairs */}
          <g stroke="rgba(236,234,228,0.35)" strokeWidth="1">
            <path d="M-30 -30h20M-30 -30v20M530 -30h-20M530 -30v20M-30 570h20M-30 570v-20M530 570h-20M530 570v-20" />
            <circle cx="205" cy="280" r="3" fill="#2563EB" />
            <circle cx="110" cy="215" r="3" fill="#60A5FA" />
            <circle cx="240" cy="432" r="3" fill="#3B82F6" />
          </g>
        </svg>
      </div>

      {/* Main Hero Viewport Block */}
      <div className="wrap relative z-10">
        <div className="hero-wrap">
          {/* Metadata Top Bar */}
          <div className="meta mono flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-zinc-400 mb-8 md:mb-12 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="text-zinc-300 font-medium tracking-wide">SOFTWARE SOB MEDIDA · IA APLICADA · AUTOMAÇÃO</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] tracking-wider uppercase text-zinc-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Projetos Exclusivos
              </span>
            </div>
          </div>

          {/*
            Monumental Title with Kinetic Precision Calibration:
            - Full title in HTML on first render for 100% SEO and accessibility
            - Interactive kinetic calibration allows user to experience the tension of Chaos vs Order
          */}
          <h1
            className={`mega ${ordered ? 'ordered' : ''}`}
            id="mega"
            aria-label="Menos tarefas manuais. Mais ritmo operacional."
          >
            {/* Line 1: "Menos tarefas" */}
            <span className="line">
              {line0.map((w, wIdx) => (
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

            {/* Line 2: "manuais." */}
            <span className="line">
              {line1.map((w, wIdx) => (
                <span key={wIdx} className={`w${w.isManual ? ' manual' : ''} relative`} aria-hidden="true">
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

          {/* Subheadline with Light Architectural Counterpoint */}
          <div className="mega2 font-light">
            Mais inteligência<br />
            para sua operação.
          </div>

          {/* Interactive Calibration Switch (Tension between Chaos and Precision) */}
          <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
            <button
              className="mono group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-blue-400/40 backdrop-blur-md text-zinc-300 hover:text-white transition-all shadow-[0_4px_24px_rgba(0,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              id="shuffle"
              data-cursor
              onClick={handleToggleCalibration}
              aria-label={ordered ? 'Desorganizar fluxo (simular caos)' : 'Calibrar fluxo (organizar precisão)'}
            >
              <Sliders className="w-3.5 h-3.5 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[11px] uppercase tracking-wider font-medium">
                {ordered ? 'Simular entropia manual' : 'Calibrar fluxo contínuo'}
              </span>
              <span className={`w-1.5 h-1.5 rounded-full ${ordered ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'}`} />
            </button>

            <span className="mono text-[11px] text-zinc-400">
              {ordered ? '● Matriz sincronizada: sem gargalos humanos' : '○ Entropia operacional: planilhas e retrabalho manual'}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Foot — Architectural Positioning & Seamless Transition */}
      <div className="wrap relative z-10 mt-8 md:mt-12">
        <div className="hero-foot border-t border-white/[0.08]">
          <div className="lead-col">
            <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-medium leading-relaxed max-w-2xl">
              Projetamos software sob medida, modelos de IA aplicada e arquiteturas de automação para empresas que buscam ritmo operacional.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl">
              Substitua remendos manuais por{' '}
              <span className="text-blue-300 font-medium">
                sistemas autônomos, precisos e escaláveis.
              </span>
            </p>

            {/* Technical Proof Badges — horizontal, elegant, un-squished */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs mono text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Propriedade 100% da sua empresa
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs mono text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Sem mensalidades de prateleira
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs mono text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Entrega contínua em sprints
              </span>
            </div>
          </div>

          <div className="action-col">
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4 w-full">
              <a
                className="ghost mono inline-flex items-center gap-2 py-3 px-4 text-xs tracking-wider text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white"
                href="#problema"
                data-cursor
              >
                <span>Investigar o caos</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>

              <a
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm md:text-base transition-all duration-300 shadow-[0_0_35px_rgba(37,99,235,0.45)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-[1.02] active:scale-[0.98] border border-blue-400/40"
                data-cursor
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Expor meu gargalo operacional</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            <div className="mono text-[11px] text-zinc-400 flex items-center justify-start lg:justify-end gap-2 w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DIAGNÓSTICO TÉCNICO INICIAL SEM COMPROMISSO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
