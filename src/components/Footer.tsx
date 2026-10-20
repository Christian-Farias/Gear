import React from 'react';
import { WHATSAPP_URL } from '../data/config';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#05070B] pt-20 pb-12 overflow-hidden border-t border-white/[0.08]" role="contentinfo">
      {/* Background illumination */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] max-w-[800px] h-[300px] bg-gradient-to-t from-blue-600/10 to-transparent blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="wrap relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Col 1: Logo & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#top" className="inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1" aria-label="Voltar ao topo da página">
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
              <span>Sistemas &amp; Serviços 100% Operacionais</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              Navegar
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a href="#solucoes" className="hover:text-blue-400 transition-colors">Soluções</a>
              </li>
              <li>
                <a href="#casos" className="hover:text-blue-400 transition-colors">Casos de Estudo</a>
              </li>
              <li>
                <a href="#processo" className="hover:text-blue-400 transition-colors">Nosso Processo</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-blue-400 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-blue-400 transition-colors">Iniciar Projeto</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Communities */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              Presença
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="mono text-xs text-zinc-400 uppercase tracking-widest font-semibold">
              Contato Direto
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <span>WhatsApp Oficial</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@gear.com.br" 
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <span>contato@gear.com.br</span>
                </a>
              </li>
              <li className="pt-2 text-xs text-zinc-400 mono">
                São Paulo, SP &bull; Atendimento Remoto Nacional
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Credits Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mono text-xs text-zinc-400">
          <span>&copy; {new Date().getFullYear()} GEAR Tecnologia Ltda. Todos os direitos reservados.</span>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com excelência no Brasil</span>
            <span>&bull;</span>
            <span className="text-blue-400">Sistemas Sob Medida</span>
          </div>
        </div>
      </div>

      {/* Monumental Architectural Watermark Typography */}
      <div 
        className="text-[26vw] font-bold tracking-tighter text-center leading-[0.72] text-white/[0.02] select-none mt-10 -mb-6 pointer-events-none transition-colors"
        aria-hidden="true"
      >
        GEAR
      </div>
    </footer>
  );
};

export default Footer;
