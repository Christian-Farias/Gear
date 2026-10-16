import React, { useState, useEffect, useRef } from 'react';

const Q = [
  {
    t: 'A GEAR transformou um processo manual em algo <em>totalmente automatizado.</em> Menos erro, mais agilidade e um ganho real de produtividade.',
    n: 'Rafael Souza',
    r: 'Diretor de Operações',
    i: 'RS',
  },
  {
    t: 'Entregaram no prazo e sempre com alguém <em>do outro lado da linha.</em> Hoje decidimos olhando um painel, não 12 planilhas.',
    n: 'Camila Lima',
    r: 'Gerente Financeira',
    i: 'CL',
  },
  {
    t: 'O site novo mudou como os clientes nos enxergam. <em>Mais rápido, mais claro</em> e com contatos chegando desde a primeira semana.',
    n: 'Marcos Alves',
    r: 'Sócio-diretor',
    i: 'MA',
  },
];

const Testimonials: React.FC = () => {
  const [qi, setQi] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const showQ = (n: number) => {
    setQi((n + Q.length) % Q.length);
    setAnimKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      showQ(qi + 1);
    }, 7000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [qi]);

  const d = Q[qi];

  return (
    <section className="sec q" id="depoimentos">
      <div className="wrap">
        <div className="qwrap">
          <div className="mono">(05) — Clientes</div>
          <div className="qbox">
            <div
              key={`qt-${animKey}`}
              id="qt"
              className="qt swap"
              dangerouslySetInnerHTML={{ __html: `“${d.t}”` }}
            />
            <div key={`qa-${animKey}`} className="qa swap">
              <div className="av" id="qav">
                {d.i}
              </div>
              <div>
                <b id="qn">{d.n}</b>
                <span id="qr">{d.r}</span>
              </div>
            </div>
            <div className="qc">
              <button id="qp" aria-label="Anterior" data-cursor onClick={() => showQ(qi - 1)}>
                ←
              </button>
              <button id="qnx" aria-label="Próximo" data-cursor onClick={() => showQ(qi + 1)}>
                →
              </button>
              <div className="pg">
                <i key={`pgi-${animKey}`} id="pgi" className="run" />
              </div>
              <span className="mono" id="qcount">
                {`0${qi + 1} / 0${Q.length}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
