import React, { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../data/config';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clockStr, setClockStr] = useState('BRT —');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Track active section for navigation indicator
      const sections = ['problema', 'solucoes', 'casos', 'processo', 'diferenciais', 'depoimentos', 'contato'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const updateClock = () => {
      const now = new Date();
      const time = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Sao_Paulo',
      });
      setClockStr(`BRT ${time}`);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(timer);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#problema', label: 'O Caos', num: '02' },
    { href: '#solucoes', label: 'Soluções', num: '03' },
    { href: '#casos', label: 'Casos', num: '04' },
    { href: '#processo', label: 'Método', num: '05' },
    { href: '#diferenciais', label: 'Diferenciais', num: '06' },
    { href: '#contato', label: 'Contato', num: '07' },
  ];

  return (
    <>
      <header
        id="hd"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#05070B]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3.5'
            : 'bg-transparent border-b border-transparent py-5 md:py-6'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          {/* Logo with interactive hover */}
          <a
            href="#top"
            className="logo group flex items-center gap-3 text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            data-cursor
            aria-label="GEAR — Página Inicial"
          >
            <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-500 group-hover:scale-105">
              <svg viewBox="0 0 500 540" className="w-full h-full drop-shadow-[0_0_12px_rgba(45,99,255,0.4)]">
                <use href="#logo-g" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-[0.28em] text-[15px] md:text-[17px] text-white">
                GEAR
              </span>
              <span className="mono text-[8px] text-zinc-400 tracking-wider hidden sm:block">
                STUDIO &bull; BR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-cursor
                  className={`mono text-[11px] px-3.5 py-1.5 rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-white bg-blue-600/30 border border-blue-500/40 shadow-[0_0_15px_rgba(45,99,255,0.3)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Status, Clock and WhatsApp CTA */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Status indicator: Studio availability */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponível para novos projetos</span>
            </div>

            {/* Live Clock */}
            <span
              className="mono text-[11px] text-zinc-400 hidden sm:inline-block font-mono tracking-wider tabular-nums"
              id="clock"
              title="Horário Oficial de Brasília"
            >
              {clockStr}
            </span>

            {/* Primary Action Button */}
            <a
              className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 min-h-[44px] rounded-full text-[11px] sm:text-[12px] mono text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_28px_rgba(37,99,235,0.6)] hover:scale-[1.02] active:scale-[0.98] border border-blue-400/30 touch-manipulation"
              data-cursor
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp com a equipe da GEAR"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button with Minimum 44px Touch Target */}
            <button
              type="button"
              className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 active:scale-95 touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay with Safe Scroll and Ergonomic Targets */}
      <div
        className={`fixed inset-0 z-40 bg-[#05070B]/98 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6 pt-24 pb-12 overflow-y-auto max-h-[100dvh] overscroll-contain ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="mono text-[11px] text-zinc-400 uppercase tracking-widest font-semibold">Navegação</span>
            <div className="flex items-center gap-2 text-emerald-400 text-[11px] mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{clockStr}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-3.5 min-h-[52px] border-b border-white/[0.06] text-white hover:text-blue-400 active:text-blue-300 transition-colors touch-manipulation"
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                <span className="text-2xl sm:text-3xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {link.label}
                </span>
                <span className="mono text-xs text-zinc-500 font-mono">({link.num})</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-white/10 mt-6">
          <p className="text-xs text-zinc-400 leading-relaxed">
            Software sob medida, IA e automação sem enrolação para o seu negócio crescer.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full min-h-[50px] flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] touch-manipulation"
          >
            <span>Iniciar conversa via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
