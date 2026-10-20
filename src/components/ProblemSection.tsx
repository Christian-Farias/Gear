import React, { useState } from 'react';
import { ArrowRight, ShieldAlert } from 'lucide-react';

interface FrictionPoint {
  id: string;
  code: string;
  title: string;
  symptom: string;
  impact: string;
  cost: string;
  activeStatus: string;
}

const ProblemSection: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<number>(0);

  const frictionPoints: FrictionPoint[] = [
    {
      id: 'fragmentacao',
      code: 'ERR_01',
      title: 'Dispersão de Dados & Ilhas Operacionais',
      symptom: 'Informações críticas divididas entre 5 planilhas do Google Drive, mensagens de WhatsApp e sistemas legados que não se comunicam.',
      impact: 'Fechamentos demorados, versões conflitantes de arquivos e decisões tomadas com dados desatualizados de semanas atrás.',
      cost: 'Até 30% do tempo dos gestores gasto apenas caçando e conferindo dados manuais.',
      activeStatus: 'GARGALO DE SINCRONIA DETECTADO',
    },
    {
      id: 'dependencia',
      code: 'ERR_02',
      title: 'A Chave Centralizada em Pessoas Únicas',
      symptom: 'Se o operador ou gerente de faturamento sai de férias ou adoece, o fluxo de pedidos e conciliações simplesmente empaca.',
      impact: 'Regras de negócio que residem na cabeça das pessoas em vez de estarem codificadas em um motor transparente e auditável.',
      cost: 'Vulnerabilidade institucional extrema e gargalo intransponível para crescimento.',
      activeStatus: 'PONTO ÚNICO DE FALHA OPERACIONAL',
    },
    {
      id: 'saas-lockin',
      code: 'ERR_03',
      title: 'A Armadilha do SaaS de Prateleira',
      symptom: 'Mensalidades que escalam abusivamente por usuário ativo, somadas a dezenas de campos e telas desnecessárias que ninguém usa.',
      impact: 'A empresa se deforma para caber no software padrão, em vez de o software refletir o diferencial competitivo do negócio.',
      cost: 'Custos recorrentes crescentes sem gerar nenhum ativo próprio de tecnologia.',
      activeStatus: 'DEPENDÊNCIA PERPÉTUA DE LICENÇAS',
    },
  ];

  const current = frictionPoints[selectedPoint];

  return (
    <section 
      className="sec relative py-28 md:py-36 border-t border-white/[0.08] bg-[#05070B] overflow-hidden" 
      id="problema"
      aria-label="Cena 02 — A Cartografia do Caos Operacional"
    >
      {/* Precision Chiaroscuro Low-Key Spotlight */}
      <div 
        className="absolute top-1/3 left-0 w-[45vw] max-w-[650px] h-[500px] bg-[radial-gradient(ellipse_at_left,rgba(255,106,61,0.06),transparent_70%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="wrap relative z-10">
        {/* Scene Header */}
        <div className="sec-h grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 md:mb-24">
          <div className="lg:col-span-3 text-xs md:text-sm mono text-amber-500/90 font-semibold tracking-wider flex items-center gap-2">
            <span>O CUSTO DO TRABALHO MANUAL</span>
          </div>

          <div className="lg:col-span-9 space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.02]">
              <span>A fricção invisível que</span><br />
              <span>consome sua <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-white">margem de lucro.</em></span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
              O maior desperdício de uma empresa não é o que ela gasta em tecnologia. É o tempo que sua equipe qualificada perde remendando tarefas mecânicas que um software sob medida executaria em milissegundos.
            </p>
          </div>
        </div>

        {/* Asymmetrical Diagnostic Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Friction List */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {frictionPoints.map((pt, idx) => {
                const isSelected = selectedPoint === idx;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedPoint(idx)}
                    onMouseEnter={() => setSelectedPoint(idx)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                      isSelected
                        ? 'bg-[#0D121F] border-amber-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
                        : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]'
                    }`}
                    data-cursor
                    aria-selected={isSelected}
                  >
                    {/* Active Accent Indicator */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-amber-500 transition-opacity ${
                        isSelected ? 'opacity-100' : 'opacity-0'
                      }`} 
                    />

                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`mono text-xs px-2 py-0.5 rounded font-bold ${
                          isSelected ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-white/[0.04] text-zinc-500'
                        }`}>
                          {pt.code}
                        </span>
                        <h3 className={`text-lg sm:text-xl font-medium tracking-tight ${
                          isSelected ? 'text-white' : 'text-zinc-300'
                        }`}>
                          {pt.title}
                        </h3>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                        isSelected ? 'text-amber-400 translate-x-1' : 'text-zinc-600 group-hover:translate-x-0.5'
                      }`} />
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed pl-1">
                      {pt.symptom}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Metric Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="mono text-xs text-zinc-300">
                  DIAGNÓSTICO PREVENTIVO: AUDITORIA DE PROCESSOS SEM CUSTO
                </span>
              </div>
              <span className="mono text-[11px] text-zinc-400">
                100% CONFIDENCIAL
              </span>
            </div>
          </div>

          {/* Right Column: Tactical Diagnostic Terminal */}
          <div className="lg:col-span-5 p-7 rounded-2xl bg-[#0B0F19] border border-white/[0.1] shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mono text-xs">
                <span className="text-amber-400 font-mono font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  {current.activeStatus}
                </span>
                <span className="text-zinc-400">AUDIT // REF: 2026.P</span>
              </div>

              <div>
                <span className="mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1.5 font-semibold">
                  Sintoma Operacional Real:
                </span>
                <p className="text-sm text-zinc-200 leading-relaxed font-normal bg-black/40 p-4 rounded-xl border border-white/[0.05]">
                  "{current.symptom}"
                </p>
              </div>

              <div>
                <span className="mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-1.5 font-semibold">
                  Impacto nos Resultados:
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {current.impact}
                </p>
              </div>
            </div>

            {/* Quantified Cost Box */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1.5">
              <span className="mono text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">
                Custo Oculto da Inação:
              </span>
              <p className="text-xs text-amber-200/90 leading-relaxed">
                {current.cost}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
