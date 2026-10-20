import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

const Differentials: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Propriedade Intelectual do Código',
      gear: '100% de sua empresa (sem lock-in)',
      saas: 'Você aluga e nunca é dono',
      agency: 'Código terceirizado ou obscuro',
    },
    {
      feature: 'Adequação ao seu Processo',
      gear: 'Sob medida para sua operação real',
      saas: 'Você se molda ao software',
      agency: 'Geralmente adaptam temas prontos',
    },
    {
      feature: 'Comunicação no Dia a Dia',
      gear: 'Direta com os engenheiros no WhatsApp',
      saas: 'Tickets demorados em centrais',
      agency: 'Intermediada por atendentes comerciais',
    },
    {
      feature: 'Custo a Longo Prazo',
      gear: 'Investimento em ativo próprio (sem licença)',
      saas: 'Mensalidades crescentes por usuário',
      agency: 'Custos recorrentes sem evolução clara',
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/[0.08] bg-[#05070B]" id="diferenciais">
      {/* Dynamic Animated Marquee Ribbon */}
      <div className="band bg-blue-600 text-white overflow-hidden py-5 md:py-6 -rotate-1 shadow-[0_10px_35px_rgba(37,99,235,0.4)] my-8">
        <div className="mq flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex items-center gap-8 px-4 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              <span>Atendimento que responde</span>
              <span className="serif italic font-normal text-blue-200">✦ prazo é compromisso</span>
              <span>Código que você consegue manter</span>
              <span className="serif italic font-normal text-blue-200">✦ sem letras miúdas</span>
              <span>Inteligência que gera lucro</span>
              <span className="serif italic font-normal text-blue-200">✦ arquitetura sob medida</span>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap mt-16 md:mt-24">
        {/* Section Mini Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08] mb-12">
          <div>
            <span className="mono text-xs md:text-sm text-blue-400 font-semibold tracking-wider block mb-2">
              CRITÉRIO COMPARATIVO // ATIVO PRÓPRIO VS ALUGUEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              A diferença entre alugar um software e <br className="hidden sm:inline" />
              <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-200">construir um ativo do seu negócio.</em>
            </h2>
          </div>
          <p className="text-sm md:text-base text-zinc-400 max-w-md leading-relaxed">
            Eliminamos a frustração comum do mercado de TI: comunicação lenta, aditivos surpresa e dependência perpétua.
          </p>
        </div>

        {/* Asymmetric Comparison Matrix */}
        <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-[#0A0E17]/90 border border-white/[0.1] shadow-2xl overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-12 pb-4 border-b border-white/[0.08] text-xs mono uppercase tracking-wider text-zinc-400 font-semibold">
              <div className="col-span-4">Critério de Engenharia</div>
              <div className="col-span-4 text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GEAR Studio</span>
              </div>
              <div className="col-span-2 text-zinc-400">SaaS de Prateleira</div>
              <div className="col-span-2 text-zinc-400">Agências Tradicionais</div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 py-5 items-center text-sm gap-2">
                  <div className="col-span-4 font-medium text-white pr-4">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-blue-200 font-medium flex items-center gap-2 pr-4">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{row.gear}</span>
                  </div>
                  <div className="col-span-2 text-zinc-400 text-xs flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{row.saas}</span>
                  </div>
                  <div className="col-span-2 text-zinc-400 text-xs flex items-center gap-1.5">
                    <X className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{row.agency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operational Indicators Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/20 via-white/[0.02] to-blue-950/20 border border-white/[0.08] text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">100%</div>
            <span className="text-xs text-zinc-400 mt-1 block">Entregas no Prazo Fechado</span>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-blue-400 tracking-tight">0%</div>
            <span className="text-xs text-zinc-400 mt-1 block">Lock-in de Código</span>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">&le; 24h</div>
            <span className="text-xs text-zinc-400 mt-1 block">Tempo Máximo de Resposta</span>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-400 tracking-tight">100%</div>
            <span className="text-xs text-zinc-400 mt-1 block">Propriedade do Cliente</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
