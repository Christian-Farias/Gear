import React, { useRef } from 'react';
import { WHATSAPP_URL } from '../data/config';

const CTAContact: React.FC = () => {
  const magRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const mag = magRef.current;
    if (!mag) return;
    const r = mag.getBoundingClientRect();
    mag.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.28}px, ${
      (e.clientY - r.top - r.height / 2) * 0.28
    }px)`;
  };

  const handleMouseLeave = () => {
    const mag = magRef.current;
    if (!mag) return;
    mag.style.transform = '';
    mag.style.transition =
      'transform .6s cubic-bezier(.2,.8,.2,1),background .4s,color .4s';
  };

  const handleMouseEnter = () => {
    const mag = magRef.current;
    if (!mag) return;
    mag.style.transition = 'background .4s,color .4s';
  };

  return (
    <section className="cta" id="contato">
      <div className="ring-bg"></div>
      <div className="ring-bg r2"></div>
      <div className="wrap">
        <span className="mono" style={{ display: 'block', marginBottom: '34px', color: '#dfe8ff' }}>
          (06) — Vamos conversar?
        </span>
        <h2>
          <span className="mask">
            <span>Vamos tirar</span>
          </span>
          <span className="mask">
            <span style={{ ['--d' as any]: '100ms' }}>isso da</span>
          </span>
          <span className="mask">
            <span style={{ ['--d' as any]: '200ms' }}>
              <em>planilha?</em>
            </span>
          </span>
        </h2>
        <div className="row2">
          <p>
            Conta o que está travando a sua operação. Respondemos em até 1 dia útil, com um caminho
            possível, sem compromisso.
          </p>
          <a
            className="mag"
            id="mag"
            data-cursor
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            ref={magRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              Falar no<br />
              WhatsApp ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAContact;
