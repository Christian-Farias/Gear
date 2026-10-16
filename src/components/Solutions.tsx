import React, { useState } from 'react';

interface Solution {
  t: string;
  k: string;
  h: string;
  e: string;
  v: string;
}

const S: Solution[] = [
  {
    t: 'Software',
    k: 'Sob medida',
    h: 'Seu processo é único. O sistema também deveria ser.',
    e: 'Cadastro, estoque e financeiro num só lugar, <b>do jeito que sua equipe trabalha</b>.',
    v: '<div class="mv"><div class="in2">Cliente: Maria Souza</div><div class="in2">Pedido #2041 · 3 itens</div><div class="bar2 b" style="width:55%"></div><div class="btn2">Salvar</div></div>',
  },
  {
    t: 'Inteligência Artificial',
    k: 'Mais precisão',
    h: 'IA que faz o trabalho repetitivo e deixa o julgamento com você.',
    e: 'Lê notas fiscais, classifica e-mails e responde dúvidas repetidas, <b>com revisão humana</b>.',
    v: '<div class="mv"><div class="bubble">Qual o status do meu pedido?</div><div class="bubble me">Saiu hoje às 14h. Rastreio: BR204…</div><div class="bubble">Obrigado!</div></div>',
  },
  {
    t: 'Automação',
    k: 'Tempo de volta',
    h: 'Se alguém faz a mesma coisa todo dia, uma máquina deveria fazer.',
    e: 'Da planilha ao relatório pronto, <b>sem ninguém copiar e colar</b>.',
    v: '<div class="mv flow"><div class="nd">Planilha</div>→<div class="nd hl">Regra</div>→<div class="nd">Relatório</div></div>',
  },
  {
    t: 'Dashboards',
    k: 'Decisão clara',
    h: 'Seus números, sem precisar pedir para ninguém.',
    e: 'Vendas, estoque e caixa num painel que <b>atualiza sozinho</b>.',
    v: '<div class="mv bars"><i style="height:35%"></i><i style="height:55%"></i><i style="height:45%"></i><i style="height:75%"></i><i style="height:60%"></i><i style="height:92%"></i></div>',
  },
  {
    t: 'Sites',
    k: 'Presença digital',
    h: 'Rápido, claro e com um caminho óbvio até o contato.',
    e: 'Menos enfeite, <b>mais clareza e velocidade</b>.',
    v: '<div class="brw"><div class="tb"><i></i><i></i><i></i></div><div class="bd"><div class="bar2" style="height:20px;width:65%;background:var(--paper)"></div><div class="bar2" style="width:90%"></div><div class="bar2" style="width:55%"></div><div class="btn2" style="align-self:flex-start;background:var(--blue);color:#fff;padding:7px 12px;border-radius:3px;margin-top:4px">Pedir orçamento</div></div></div>',
  },
  {
    t: 'Sistemas',
    k: 'Operação inteira',
    h: 'O sistema que conversa com o resto da empresa.',
    e: 'Integra o que você já usa e <b>elimina retrabalho entre áreas</b>.',
    v: '<div class="mv tbl"><div><span>Cliente</span><span>Status</span><span>Valor</span></div><div><span>Atlas Ltda</span><span style="color:var(--blue-hi)">Pago</span><span>4.200</span></div><div><span>Norte Co.</span><span>Aberto</span><span>1.850</span></div><div><span>Vértice</span><span style="color:var(--blue-hi)">Pago</span><span>9.100</span></div></div>',
  },
  {
    t: 'Aplicativos',
    k: 'No bolso do cliente',
    h: 'Experiências que aproximam sua marca de quem compra.',
    e: 'Apps e PWAs que <b>funcionam até sem internet</b>.',
    v: '<div class="ph"><i></i><i class="b"></i><i></i><i style="width:70%"></i><i style="width:85%"></i></div>',
  },
];

const Solutions: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [openMobileIdx, setOpenMobileIdx] = useState<number | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const selectItem = (i: number) => {
    if (i !== activeIdx) {
      setActiveIdx(i);
      setAnimKey((prev) => prev + 1);
    }
  };

  const handleRowClick = (i: number) => {
    selectItem(i);
    if (window.innerWidth <= 980) {
      setOpenMobileIdx((prev) => (prev === i ? null : i));
    }
  };

  const current = S[activeIdx];

  return (
    <section className="sec" id="solucoes">
      <div className="wrap">
        <div className="sec-h">
          <div className="n mono rv">(02) — O que fazemos</div>
          <h2>
            <span className="mask">
              <span>Sete jeitos de tirar</span>
            </span>
            <span className="mask">
              <span style={{ ['--d' as any]: '120ms' }}>
                peso das <em>suas costas.</em>
              </span>
            </span>
          </h2>
        </div>

        <div className="sol">
          <div className="sol-list" id="list">
            {S.map((s, i) => {
              const isAct = activeIdx === i;
              const isOpen = openMobileIdx === i;
              return (
                <button
                  key={i}
                  className={`row ${isAct ? 'act' : ''} ${isOpen ? 'open' : ''}`}
                  data-cursor
                  onMouseEnter={() => selectItem(i)}
                  onFocus={() => selectItem(i)}
                  onClick={() => handleRowClick(i)}
                >
                  <div className="row-in">
                    <span className="nn mono">0{i + 1}</span>
                    <span className="t">{s.t}</span>
                    <span className="k mono">{s.k}</span>
                  </div>
                  <div className="more">{s.h}</div>
                </button>
              );
            })}
          </div>

          <aside className="panel" id="panel" aria-live="polite">
            <div className="top mono">
              <span id="p-n">
                0{activeIdx + 1} / 0{S.length}
              </span>
              <span id="p-k">{current.k}</span>
            </div>

            <div
              key={`vis-${animKey}`}
              className="vis swap"
              id="p-vis"
              dangerouslySetInnerHTML={{ __html: current.v }}
            />

            <div>
              <h3 key={`h3-${animKey}`} className="swap" id="p-t">
                {current.h}
              </h3>
            </div>

            <p
              key={`ex-${animKey}`}
              className="ex swap"
              id="p-ex"
              dangerouslySetInnerHTML={{ __html: 'Ex.: ' + current.e }}
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
