import React from 'react';
import { WHATSAPP_URL } from '../data/config';
import { ArrowUpRight, Mail } from 'lucide-react';

// TODO: Replace WHATSAPP_URL in src/data/config.ts with the real GEAR number
// TODO: Confirm contact@gear.com.br is operational before publishing
// TODO: Add real social profile URLs when available

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070B] pt-20 pb-10 overflow-hidden border-t border-white/[0.08]" role="contentinfo">
      {/* Background illumination */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[750px] h-[250px] bg-gradient-to-t from-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">

          {/* Col 1: Logo & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3 min-h-[44px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1" aria-label="Voltar ao topo da página">
              <div className="w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <svg viewBox="0 0 500 540" className="w-full h-full drop-shadow-[0_0_10px_rgba(45,99,255,0.4)]">
                  <use href="#logo-g" />
                </svg>
              </div>
              <span className="font-bold tracking-[0.25em] text-lg text-white">
                GEAR
              </span>
            </a>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Estúdio de tecnologia, inteligência artificial e engenharia de software sob medida. Construímos sistemas que eliminam trabalho manual e impulsionam o seu crescimento.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponível para novos projetos</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              Navegar
            </h4>
            <ul className="text-sm text-zinc-300">
              {[
                { href: '#problema', label: 'O Caos Operacional' },
                { href: '#solucoes', label: 'Soluções & Motor' },
                { href: '#casos', label: 'Casos de Estudo' },
                { href: '#processo', label: 'Nosso Processo' },
                { href: '#diferenciais', label: 'Diferenciais' },
                { href: '#depoimentos', label: 'Clientes' },
                { href: '#contato', label: 'Iniciar Projeto' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="block py-3.5 hover:text-blue-400 transition-colors touch-manipulation">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Expertise */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              Expertise
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {['Software Sob Medida', 'IA & Automação', 'Dashboards & BI', 'Sites & Web Apps', 'Integrações de API'].map((item) => (
                <li key={item} className="text-xs leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              Contato Direto
            </h4>
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>
                {/* WhatsApp — pending real number in config.ts */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] hover:text-emerald-400 transition-colors touch-manipulation"
                  aria-label="Conversar via WhatsApp"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" aria-hidden="true" />
                </a>
              </li>
              <li>
                {/* Email — pending confirmation that this address is operational */}
                <a
                  href="mailto:contato@gear.com.br"
                  className="inline-flex items-center gap-1.5 min-h-[44px] hover:text-blue-400 transition-colors touch-manipulation"
                  aria-label="Enviar e-mail para contato@gear.com.br"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                  <span>contato@gear.com.br</span>
                </a>
              </li>
              <li className="pt-1 text-xs text-zinc-400 mono leading-relaxed">
                São Paulo, SP &bull; Atendimento Remoto Nacional
              </li>
              {/* Social links — to be added when official profiles are confirmed */}
              <li>
                <span className="mono text-xs text-zinc-400 italic">
                  Redes sociais em configuração
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Credits Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mono text-xs text-zinc-400">
          <span>&copy; {year} GEAR Tecnologia. Todos os direitos reservados.</span>
          <div className="flex items-center gap-2">
            <span>Desenvolvido no Brasil</span>
            <span>&bull;</span>
            <span className="text-blue-500">Sistemas Sob Medida</span>
          </div>
        </div>
      </div>

      {/* Monumental Watermark — atmospheric depth, never dominating */}
      <div
        className="text-[17vw] sm:text-[18vw] font-bold tracking-tighter text-center leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.03] to-transparent select-none mt-8 -mb-4 pointer-events-none"
        aria-hidden="true"
      >
        GEAR
      </div>
    </footer>
  );
};

export default Footer;
