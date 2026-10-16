import React, { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '../data/config';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [clockStr, setClockStr] = useState('BRT —');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    const timer = setInterval(updateClock, 15000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header id="hd" className={isScrolled ? 'sc' : ''}>
      <div className="wrap bar">
        <a href="#top" className="logo" data-cursor>
          <svg viewBox="0 0 500 540">
            <use href="#logo-g" />
          </svg>
          <b>GEAR</b>
        </a>
        <nav className="nav mono">
          <a href="#solucoes" data-cursor>
            Soluções
          </a>
          <a href="#casos" data-cursor>
            Casos
          </a>
          <a href="#processo" data-cursor>
            Processo
          </a>
          <a href="#contato" data-cursor>
            Contato
          </a>
        </nav>
        <div style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
          <span className="clock mono" id="clock">
            {clockStr}
          </span>
          <a
            className="pill mono"
            data-cursor
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp ↗
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
