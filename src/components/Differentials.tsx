import React from 'react';

const Differentials: React.FC = () => {
  return (
    <section
      style={{
        background: 'var(--ink)',
        paddingBlock: 'clamp(60px, 8vw, 120px) clamp(90px, 12vw, 170px)',
        overflow: 'hidden',
      }}
    >
      <div className="band" aria-hidden="true">
        <div className="mq">
          <span>Atendimento que responde</span>
          <span>prazo é promessa</span>
          <span>Código que você consegue manter</span>
          <span>sem letra miúda</span>
          <span>Atendimento que responde</span>
          <span>prazo é promessa</span>
          <span>Código que você consegue manter</span>
          <span>sem letra miúda</span>
          <span>Atendimento que responde</span>
          <span>prazo é promessa</span>
          <span>Código que você consegue manter</span>
          <span>sem letra miúda</span>
          <span>Atendimento que responde</span>
          <span>prazo é promessa</span>
          <span>Código que você consegue manter</span>
          <span>sem letra miúda</span>
        </div>
      </div>
      <div className="wrap">
        <div className="why">
          <div className="rv">
            <span className="mono" style={{ color: 'var(--blue-hi)' }}>
              A
            </span>
            <b>Atendimento próximo</b>
            <p>Você fala com quem constrói. Sem intermediário, sem ticket.</p>
          </div>
          <div className="rv" style={{ ['--d' as any]: '90ms' }}>
            <span className="mono" style={{ color: 'var(--blue-hi)' }}>
              B
            </span>
            <b>Seguro e escalável</b>
            <p>Pensado para crescer com a empresa, não para ser refeito em um ano.</p>
          </div>
          <div className="rv" style={{ ['--d' as any]: '180ms' }}>
            <span className="mono" style={{ color: 'var(--blue-hi)' }}>
              C
            </span>
            <b>Time experiente</b>
            <p>Gente sênior no projeto do começo ao fim.</p>
          </div>
          <div className="rv" style={{ ['--d' as any]: '270ms' }}>
            <span className="mono" style={{ color: 'var(--blue-hi)' }}>
              D
            </span>
            <b>Prazo e resultado</b>
            <p>Combinamos o que dá para cumprir. E cumprimos.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
