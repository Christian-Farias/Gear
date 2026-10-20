import React, { useState, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  segment: string;
  initials: string;
  projectType: string;
}

// NOTE: These testimonials are representative of the type of results GEAR aims to
// deliver. They will be replaced by verified client testimonials as they are collected
// and authorized for publication.
const testimonials: Testimonial[] = [
  {
    quote: 'A GEAR transformou um processo operacional que consumia dias inteiros em uma rotina totalmente automatizada. Menos erros humanos, agilidade real e um ganho mensurável de produtividade.',
    name: 'Rafael S.',
    role: 'Diretor de Operações',
    company: 'Rede de Saúde',
    segment: 'Saúde & Diagnóstico',
    initials: 'RS',
    projectType: 'Dashboard Analytics & ETL',
  },
  {
    quote: 'Entregaram no prazo combinado com engenheiros de verdade do outro lado da linha. Hoje tomamos decisões estratégicas olhando um único painel em tempo real.',
    name: 'Camila L.',
    role: 'Gerente Financeira',
    company: 'Distribuidora',
    segment: 'Varejo & Distribuição',
    initials: 'CL',
    projectType: 'App Financeiro & Automação',
  },
  {
    quote: 'A nova plataforma mudou completamente a percepção dos nossos clientes corporativos. Carregamento rápido, mensagem nítida e contatos qualificados na primeira semana.',
    name: 'Marcos A.',
    role: 'Sócio-Diretor',
    company: 'Consultoria B2B',
    segment: 'Serviços B2B',
    initials: 'MA',
    projectType: 'Site Corporativo de Alta Performance',
  },
];

const Testimonials: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance paused on interaction — restarts after 10s idle
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => changeSlide(currentIdx + 1), 8000);
  };

  const changeSlide = (newIdx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrentIdx((newIdx + testimonials.length) % testimonials.length);
    setTimeout(() => setAnimating(false), 400);
    resetInterval();
  };

  const active = testimonials[currentIdx];

  return (
    <section
      className="sec relative py-24 md:py-36 border-t border-white/[0.08] bg-[#05070B] overflow-hidden"
      id="depoimentos"
    >
      {/* Background illumination */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] max-w-[650px] aspect-square rounded-full bg-blue-600/10 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="wrap">
        {/* Section Header */}
        <div className="sec-h grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14 md:mb-20">
          <div className="lg:col-span-3 text-xs md:text-sm mono text-blue-400 font-semibold tracking-wider">
            VOZ DO CLIENTE // IMPACTO OPERACIONAL
          </div>
          <h2 className="lg:col-span-9 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-white">
            <span>Quem opera com a GEAR,</span><br />
            <span>não volta para a{' '}
              <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">planilha.</em>
            </span>
          </h2>
        </div>

        {/*
          Honesty disclosure: testimonials are illustrative of the type of
          results GEAR delivers and will be replaced by verified client
          statements as they are collected and authorized.
        */}
        <p className="mono text-xs text-zinc-500 mb-8 border border-white/[0.06] px-4 py-2 rounded-lg inline-flex items-center gap-2 bg-white/[0.02]">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block" />
          Depoimentos ilustrativos — substituídos por declarações verificadas conforme autorizadas pelos clientes.
        </p>

        {/* Testimonial Card */}
        <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#0D121F] to-[#070A11] border border-white/[0.12] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          <Quote
            className="absolute top-6 right-8 w-28 h-28 text-white/[0.03] pointer-events-none -rotate-12"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col justify-between min-h-[280px] gap-8">
            {/* Top: Stars & Project Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" />
                ))}
              </div>
              <span className="mono text-xs text-blue-400 bg-blue-600/10 border border-blue-500/20 px-3 py-1 rounded-full">
                {active.projectType}
              </span>
            </div>

            {/* Main Quote */}
            <div className={`transition-all duration-500 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-white font-normal leading-relaxed tracking-tight">
                "{active.quote}"
              </blockquote>
            </div>

            {/* Author & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 text-white font-mono font-bold text-base flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] border border-blue-400/30">
                  {active.initials}
                </div>
                <div>
                  <span className="font-semibold text-white text-base block">
                    {active.name}
                  </span>
                  <span className="text-xs text-zinc-400 block">
                    {active.role} &bull; <strong className="text-zinc-300 font-medium">{active.company}</strong>
                  </span>
                  <span className="mono text-[10px] text-zinc-500">{active.segment}</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 mr-2">
                  {testimonials.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => changeSlide(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIdx === dotIdx ? 'w-6 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Ir para depoimento ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => changeSlide(currentIdx - 1)}
                    className="w-10 h-10 rounded-full border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label="Depoimento anterior"
                    data-cursor
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeSlide(currentIdx + 1)}
                    className="w-10 h-10 rounded-full border border-white/[0.12] bg-white/[0.04] text-white hover:bg-white/[0.1] hover:border-white/[0.2] transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label="Próximo depoimento"
                    data-cursor
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <span className="mono text-xs text-zinc-400 font-mono pl-2">
                  0{currentIdx + 1} / 0{testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
