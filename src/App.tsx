import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Process from './components/Process';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import CTAContact from './components/CTAContact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const curRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic top scroll progress bar
    const handleScroll = () => {
      if (!progRef.current) return;
      const h = document.documentElement;
      const progress = window.scrollY / (h.scrollHeight - window.innerHeight);
      progRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Custom fluid magnetic cursor on devices supporting hover
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let cx = window.innerWidth / 2;
      let cy = window.innerHeight / 2;
      let tx = cx;
      let ty = cy;

      const handleMouseMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if (curRef.current && curRef.current.style.opacity !== '1') {
          curRef.current.style.opacity = '1';
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        }
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (curRef.current) {
          const isInteractive = !!target?.closest('a, button, [data-cursor], input, textarea, select');
          curRef.current.classList.toggle('big', isInteractive);
        }
      };

      const handleMouseLeave = () => {
        if (curRef.current) curRef.current.style.opacity = '0';
      };

      const handleMouseEnter = () => {
        if (curRef.current) curRef.current.style.opacity = '1';
      };

      let animId: number;
      const loop = () => {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
        }
        animId = requestAnimationFrame(loop);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseover', handleMouseOver, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      animId = requestAnimationFrame(loop);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        cancelAnimationFrame(animId);
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Decorative icon SVGs (lucide): hide from the accessibility tree unless named
  useEffect(() => {
    const gate = (svg: Element) => {
      if (!svg.getAttribute('role') && !svg.getAttribute('aria-label') && !svg.getAttribute('aria-labelledby')) {
        svg.setAttribute('aria-hidden', 'true');
      }
    };
    document.querySelectorAll('svg').forEach(gate);
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node instanceof SVGSVGElement) gate(node);
          else if (node instanceof Element) node.querySelectorAll('svg').forEach(gate);
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070B] text-[#ECEAE4] selection:bg-blue-600 selection:text-white antialiased font-sans">
      {/* Top Reading Progress Bar */}
      <div 
        ref={progRef} 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-sky-400 to-blue-500 origin-left scale-x-0 z-[60] pointer-events-none transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(37,99,235,0.8)]" 
        id="prog" 
        aria-hidden="true" 
      />

      {/* Fluid Interactive Cursor */}
      <div ref={curRef} className="cur transition-opacity duration-300 opacity-0" id="cur" aria-hidden="true">
        <div ref={ringRef} className="ring pointer-events-none" id="ring" />
        <div ref={dotRef} className="dot pointer-events-none" id="dot" />
      </div>

      {/* Subtle Architectural Column Guides */}
      <div className="cols fixed inset-0 pointer-events-none z-0 hidden lg:grid grid-cols-12 max-w-[1600px] mx-auto px-6" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-l border-white/[0.02] last:border-r" />
        ))}
      </div>

      <a href="#top" className="skip-link">
        Pular para o conteúdo
      </a>

      <Header />
      <main id="top" className="relative z-10">
        <Hero />
        <ProblemSection />
        <Solutions />
        <Projects />
        <Process />
        <Differentials />
        <Testimonials />
        <CTAContact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
