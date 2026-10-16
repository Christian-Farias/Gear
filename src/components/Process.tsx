import React, { useEffect, useRef } from 'react';

const Process: React.FC = () => {
  const stepsElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stepsEl = stepsElRef.current;
    if (!stepsEl) return;

    const steps = stepsEl.querySelectorAll<HTMLElement>('.step');
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle('on', e.isIntersecting && e.intersectionRatio > 0);
        });
      },
      { rootMargin: '-38% 0px -38% 0px', threshold: 0 }
    );

    steps.forEach((s) => sio.observe(s));

    const progress = () => {
      const r = stepsEl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / r.height));
      stepsEl.style.setProperty('--p', p.toFixed(3));
    };

    window.addEventListener('scroll', progress, { passive: true });
    progress();

    return () => {
      window.removeEventListener('scroll', progress);
      sio.disconnect();
    };
  }, []);

  return (
    <section className="sec proc" id="processo">
      <div className="wrap">
        <div className="sec-h">
          <div className="n mono rv">(04) — Como trabalhamos</div>
          <h2>
            <span className="mask">
              <span>Sem mistério.</span>
            </span>
            <span className="mask">
              <span style={{ ['--d' as any]: '120ms' }}>
                Sem <em>surpresa.</em>
              </span>
            </span>
          </h2>
        </div>

        <div className="proc-g">
          <div className="proc-l rv">
            <p>
              Da primeira conversa à entrega, você sabe em que etapa estamos, o que falta e quanto
              custa. Sempre.
            </p>
          </div>

          <div className="steps" id="steps" ref={stepsElRef}>
            <div className="track">
              <i id="fill" />
            </div>

            <div className="step">
              <div className="no">01</div>
              <h3>Diagnóstico</h3>
              <p>A gente escuta, olha como o trabalho acontece hoje e acha onde o tempo está vazando.</p>
              <div className="del mono">
                <span>Mapa do processo</span>
                <span>Escopo claro</span>
              </div>
            </div>

            <div className="step">
              <div className="no">02</div>
              <h3>Planejamento</h3>
              <p>
                Escolhemos a tecnologia certa, não a da moda. Você recebe prazo, custo e o que vai
                sair em cada etapa.
              </p>
              <div className="del mono">
                <span>Proposta fechada</span>
                <span>Cronograma</span>
              </div>
            </div>

            <div className="step">
              <div className="no">03</div>
              <h3>Desenvolvimento</h3>
              <p>Entregas curtas e visíveis. Você testa, opina e corrige antes de virar problema.</p>
              <div className="del mono">
                <span>Entregas semanais</span>
                <span>Versão de teste</span>
              </div>
            </div>

            <div className="step">
              <div className="no">04</div>
              <h3>Entrega e suporte</h3>
              <p>
                Treinamos o time, acompanhamos o começo e ficamos por perto. Código que você
                consegue manter.
              </p>
              <div className="del mono">
                <span>Treinamento</span>
                <span>Suporte contínuo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
