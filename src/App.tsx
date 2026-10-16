import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
    // Scroll progress bar
    const handleScroll = () => {
      if (!progRef.current) return;
      const h = document.documentElement;
      const progress = window.scrollY / (h.scrollHeight - window.innerHeight);
      progRef.current.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Reveal IntersectionObserver
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('.rv, .sec-h h2, .cta h2').forEach((el) => io.observe(el));

    // Custom fluid cursor
    if (window.matchMedia('(hover: hover)').matches) {
      let cx = 0;
      let cy = 0;
      let tx = 0;
      let ty = 0;

      const handleMouseMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${tx}px, ${ty}px)`;
        }
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (curRef.current) {
          const isInteractive = !!target?.closest('a, button, [data-cursor]');
          curRef.current.classList.toggle('big', isInteractive);
        }
      };

      let animId: number;
      const loop = () => {
        cx += (tx - cx) * 0.16;
        cy += (ty - cy) * 0.16;
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
        }
        animId = requestAnimationFrame(loop);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseover', handleMouseOver, { passive: true });
      animId = requestAnimationFrame(loop);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        cancelAnimationFrame(animId);
        io.disconnect();
      };
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={progRef} className="prog" id="prog" />
      <div ref={curRef} className="cur" id="cur">
        <div ref={ringRef} className="ring" id="ring" />
        <div ref={dotRef} className="dot" id="dot" />
      </div>
      <div className="cols" aria-hidden="true">
        <i /><i /><i /><i /><i /><i />
        <i /><i /><i /><i /><i /><i />
      </div>

      <Header />
      <main id="top">
        <Hero />
        <Solutions />
        <Projects />
        <Process />
        <Differentials />
        <Testimonials />
        <CTAContact />
      </main>
      <Footer />
    </>
  );
};

export default App;
