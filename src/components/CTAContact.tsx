import React, { useRef, useState } from 'react';
import { WHATSAPP_NUMBER } from '../data/config';
import { ArrowUpRight, Mail, Clock, Check } from 'lucide-react';

const CTAContact: React.FC = () => {
  const magRef = useRef<HTMLAnchorElement>(null);
  const [copied, setCopied] = useState(false);
  const [selectedScopes, setSelectedScopes] = useState<string[]>(['Software Sob Medida']);

  const availableScopes = [
    'Software Sob Medida',
    'Automação de Processos',
    'Inteligência Artificial',
    'Dashboards / BI',
    'Sites & Web Apps',
  ];

  const toggleScope = (scope: string) => {
    setSelectedScopes(prev => 
      prev.includes(scope) 
        ? (prev.length > 1 ? prev.filter(s => s !== scope) : prev) 
        : [...prev, scope]
    );
  };

  // Generate customized WhatsApp URL based on selected scopes
  const dynamicMessage = `Olá! Gostaria de conversar sobre um projeto com a GEAR envolvendo: ${selectedScopes.join(', ')}.`;
  const dynamicWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(dynamicMessage)}`;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only apply magnetic effect on fine pointer devices (desktops)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const mag = magRef.current;
    if (!mag) return;
    const r = mag.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.22;
    const y = (e.clientY - r.top - r.height / 2) * 0.22;
    mag.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const handleMouseLeave = () => {
    const mag = magRef.current;
    if (!mag) return;
    mag.style.transform = 'translate3d(0, 0, 0)';
    mag.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, color 0.3s';
  };

  const handleMouseEnter = () => {
    const mag = magRef.current;
    if (!mag) return;
    mag.style.transition = 'background-color 0.3s, color 0.3s';
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contato@gear.com.br');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-b from-[#080C16] via-[#0B101E] to-[#05070B] border-t border-white/[0.08]" id="contato">
      {/* Orbital glow rings */}
      <div 
        className="absolute -right-20 -top-32 w-[55vw] max-w-[700px] aspect-square rounded-full border border-blue-500/20 pointer-events-none animate-pulse-slow"
        aria-hidden="true" 
      />
      <div 
        className="absolute -right-10 -top-20 w-[40vw] max-w-[500px] aspect-square rounded-full border border-blue-400/10 pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute -right-40 -top-40 w-[70vw] max-w-[850px] aspect-square rounded-full bg-blue-600/15 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true" 
      />

      <div className="wrap relative z-10">
        {/* Top telemetry badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <span className="mono text-xs md:text-sm text-blue-400 font-semibold tracking-wider">
            (06/06) // TERMINAL DE BRIEFING
          </span>
          <div className="flex items-center gap-2 text-xs mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Atendimento técnico ativo &bull; Resposta em até 24h</span>
          </div>
        </div>

        {/* Mega Title with Editorial Serif and unclipped italic descenders */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white tracking-tight leading-[1.04] max-w-4xl">
          <span className="block">Vamos tirar</span>
          <span className="block mt-1">
            isso da{' '}
            <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-white pr-3 inline-block">
              planilha?
            </em>
          </span>
        </h2>

        {/* Interactive Scope Customizer Pills */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] space-y-3">
          <span className="mono text-xs text-zinc-400 block uppercase tracking-wider font-medium">
            Selecione o foco do seu projeto:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {availableScopes.map((scope) => {
              const isSelected = selectedScopes.includes(scope);
              return (
                <button
                  key={scope}
                  type="button"
                  onClick={() => toggleScope(scope)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mono transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white border border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                      : 'bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08] hover:bg-white/[0.08]'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                  <span>{scope}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mt-8 pt-6 border-t border-white/[0.08]">
          <div className="space-y-5 max-w-lg">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
              Conte o que está travando a sua operação hoje. Nossa equipe técnica analisa seu fluxo e apresenta uma proposta de solução sob medida, sem compromisso e sem enrolação.
            </p>

            {/* Direct Contact Alternative Links */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs mono text-zinc-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                title="Copiar e-mail de contato"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{copied ? 'E-mail copiado! (contato@gear.com.br)' : 'contato@gear.com.br'}</span>
              </button>

              <div className="flex items-center gap-2 text-xs mono text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Horário comercial (09h às 18h BRT)</span>
              </div>
            </div>
          </div>

          {/* Magnetic Interactive Primary Button with Custom WhatsApp Message */}
          <div className="flex justify-start lg:justify-end">
            <a
              className="mag group relative w-44 sm:w-52 md:w-60 aspect-square rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center font-medium shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:shadow-[0_0_80px_rgba(37,99,235,0.8)] border border-blue-300/40 transition-all duration-300 hover:scale-105 active:scale-95"
              id="mag"
              data-cursor
              href={dynamicWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              ref={magRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Abrir conversa no WhatsApp com escopo selecionado"
            >
              <span className="text-base sm:text-lg md:text-xl tracking-tight leading-snug font-semibold">
                Falar no<br />
                WhatsApp
              </span>
              <ArrowUpRight className="w-6 h-6 mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="mono text-[9px] uppercase tracking-wider text-blue-200 mt-1 block">
                Canal Direto ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAContact;
