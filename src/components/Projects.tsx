import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="sec cases" id="casos">
      <div className="wrap">
        <div className="sec-h">
          <div className="n mono rv">(03) — Estudos de caso</div>
          <h2>
            <span className="mask">
              <span>Resultado é o que</span>
            </span>
            <span className="mask">
              <span style={{ ['--d' as any]: '120ms' }}>
                fica no <em>caixa.</em>
              </span>
            </span>
          </h2>
        </div>

        <article className="case" style={{ ['--n' as any]: 0 }}>
          <div className="l">
            <div>
              <div className="tag mono">
                <span>Web</span>
                <span>Dashboard</span>
                <span>IA</span>
              </div>
              <h3>Dashboard Analytics</h3>
              <div className="pcs">
                <div>
                  <b className="mono">Problema</b>
                  <p>Fechamento do mês levava 3 dias em planilhas coladas à mão.</p>
                </div>
                <div>
                  <b className="mono">Solução</b>
                  <p>Painel único, alimentado direto dos sistemas, atualizado todo dia.</p>
                </div>
                <div>
                  <b className="mono">Como</b>
                  <p>Integrações, modelo de dados e alertas automáticos por e-mail.</p>
                </div>
              </div>
            </div>
            <div className="big">
              −94<small>% de tempo<br />no fechamento</small>
            </div>
          </div>
          <div className="r">
            <div className="mono" style={{ color: 'var(--mute)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Caso 01</span>
              <span>Rede de clínicas</span>
            </div>
            <div className="rv-vis">
              <div className="mv bars" style={{ width: '90%', height: '200px' }}>
                <i style={{ height: '30%' }} />
                <i style={{ height: '48%' }} />
                <i style={{ height: '40%' }} />
                <i style={{ height: '66%' }} />
                <i style={{ height: '58%' }} />
                <i style={{ height: '82%' }} />
                <i style={{ height: '74%' }} />
                <i style={{ height: '98%' }} />
              </div>
            </div>
            <div className="note mono">3 dias → 20 min</div>
          </div>
        </article>

        <article className="case" style={{ ['--n' as any]: 1 }}>
          <div className="l">
            <div>
              <div className="tag mono">
                <span>Mobile</span>
                <span>Financeiro</span>
                <span>UX/UI</span>
              </div>
              <h3>App Financeiro</h3>
              <div className="pcs">
                <div>
                  <b className="mono">Problema</b>
                  <p>Caixa controlado em caderno e mensagens soltas no WhatsApp.</p>
                </div>
                <div>
                  <b className="mono">Solução</b>
                  <p>App simples: lança em 2 toques e já mostra margem e saldo do dia.</p>
                </div>
                <div>
                  <b className="mono">Como</b>
                  <p>PWA instalável, relatórios por período e categorias automáticas.</p>
                </div>
              </div>
            </div>
            <div className="big">
              +12<small>horas por semana<br />devolvidas ao time</small>
            </div>
          </div>
          <div className="r">
            <div className="mono" style={{ color: 'var(--mute)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Caso 02</span>
              <span>Comércio local</span>
            </div>
            <div className="rv-vis">
              <div className="ph">
                <i />
                <i className="b" />
                <i />
                <i style={{ width: '70%' }} />
                <i style={{ width: '85%' }} />
              </div>
            </div>
            <div className="note mono">Caderno → app em 30 dias</div>
          </div>
        </article>

        <article className="case" style={{ ['--n' as any]: 2 }}>
          <div className="l">
            <div>
              <div className="tag mono">
                <span>Web</span>
                <span>Institucional</span>
                <span>Performance</span>
              </div>
              <h3>Site Corporativo</h3>
              <div className="pcs">
                <div>
                  <b className="mono">Problema</b>
                  <p>Site antigo, lento e que ninguém usava para pedir orçamento.</p>
                </div>
                <div>
                  <b className="mono">Solução</b>
                  <p>Site novo com mensagem clara, carregamento rápido e um caminho óbvio até o contato.</p>
                </div>
                <div>
                  <b className="mono">Como</b>
                  <p>Redação, design sob medida e otimização de performance.</p>
                </div>
              </div>
            </div>
            <div className="big">
              2,3<small>× mais pedidos<br />de contato</small>
            </div>
          </div>
          <div className="r">
            <div className="mono" style={{ color: 'var(--mute)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Caso 03</span>
              <span>Serviços B2B</span>
            </div>
            <div className="rv-vis">
              <div className="brw">
                <div className="tb">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="bd">
                  <div className="bar2" style={{ height: '22px', width: '70%', background: 'var(--paper)' }} />
                  <div className="bar2" style={{ width: '90%' }} />
                  <div className="bar2" style={{ width: '60%' }} />
                  <div
                    className="btn2 mono"
                    style={{
                      alignSelf: 'flex-start',
                      background: 'var(--blue)',
                      padding: '7px 12px',
                      borderRadius: '3px',
                      marginTop: '6px',
                    }}
                  >
                    Pedir orçamento
                  </div>
                </div>
              </div>
            </div>
            <div className="note mono">Lighthouse 98 · LCP 1,1 s</div>
          </div>
        </article>

        <p className="note mono">* Casos ilustrativos — substitua pelos projetos e números reais da GEAR.</p>
      </div>
    </section>
  );
};

export default Projects;
