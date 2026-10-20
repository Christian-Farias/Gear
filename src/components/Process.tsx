import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Code2, 
  Rocket, 
  CheckCircle, 
  ShieldCheck
} from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  badge: string;
  timeframe: string;
  summary: string;
  details: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Diagnóstico & Mapeamento',
      badge: 'Semana 1 · Imersão Total',
      timeframe: 'Dias 1 a 5',
      summary: 'A gente escuta, audita o fluxo de trabalho real e mapeia exatamente onde o tempo e o dinheiro estão vazando.',
      details: 'Mergulhamos na rotina da sua equipe para entender gargalos, dependências manuais e ferramentas legadas. Você não recebe jargão técnico: recebe clareza.',
      deliverables: ['Mapeamento de Processo As-Is/To-Be', 'Documento de Escopo Funcional', 'Cálculo de ROI Estimado'],
      icon: <Search className="w-5 h-5 text-blue-400" />,
    },
    {
      number: '02',
      title: 'Arquitetura & Planejamento',
      badge: 'Semana 2 · Proposta Fechada',
      timeframe: 'Dias 6 a 10',
      summary: 'Escolhemos a tecnologia certa — não a da moda. Você recebe prazo exato, custo imutável e cronograma detalhado.',
      details: 'Definimos a stack tecnológica mais segura e de menor custo de manutenção para o seu tamanho. Se uma automação simples resolver, não empurramos um software complexo.',
      deliverables: ['Cronograma de Sprints Semanal', 'Orçamento Fechado Sem Aditivos', 'Arquitetura de Segurança & Dados'],
      icon: <Compass className="w-5 h-5 text-sky-400" />,
    },
    {
      number: '03',
      title: 'Desenvolvimento Ágil em Sprints',
      badge: 'Semanas 3 a 6 · Entregas Visíveis',
      timeframe: 'Sprints Semanais',
      summary: 'Entregas curtas e funcionais a cada semana. Você testa, opina e valida no ambiente de staging antes de virar problema.',
      details: 'Nada de passar meses sem ver o projeto. Toda semana liberamos uma versão navegável para testes reais da sua equipe, refinando a usabilidade no calor da operação.',
      deliverables: ['Ambiente de Testes (Staging)', 'Relatórios Semanais de Progresso', 'Código Versionado no GitHub'],
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
    },
    {
      number: '04',
      title: 'Treinamento, Go-Live & Suporte',
      badge: 'Go-Live · Acompanhamento Ativo',
      timeframe: 'Produção Contínua',
      summary: 'Treinamos seu time presencial ou remotamente, acompanhamos os primeiros fechamentos e garantimos autonomia total.',
      details: 'Código limpo, documentado e transferido integralmente para a sua empresa. Oferecemos garantia estendida e suporte prioritário com engenheiros seniores.',
      deliverables: ['Treinamento Guiado da Equipe', 'Documentação Completa de Uso', 'Garantia de 90 Dias Pós-Entrega'],
      icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section className="sec proc relative py-24 md:py-36 border-t border-white/[0.06] overflow-hidden" id="processo">
      {/* Background illumination */}
      <div 
        className="absolute top-1/3 right-1/4 w-[45vw] max-w-[550px] aspect-square rounded-full bg-blue-600/10 blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="wrap">
        {/* Section Header */}
        <div className="sec-h grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 md:mb-20">
          <div className="lg:col-span-3 text-xs md:text-sm mono text-blue-400 font-semibold tracking-wider">
            (04) — Como trabalhamos
          </div>
          <h2 className="lg:col-span-9 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
            <span>Sem mistério.</span><br />
            <span>Sem <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">surpresas.</em></span>
          </h2>
        </div>

        {/* Narrative & Timeline Progress Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center pb-8 border-b border-white/[0.08]">
          <p className="lg:col-span-8 text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
            Da primeira reunião de alinhamento à homologação final, você sabe em qual sprint estamos, o que falta ser entregue e o custo exato. Sem letras miúdas, sem retrabalho.
          </p>

          <div className="lg:col-span-4 flex items-center lg:justify-end gap-3 text-xs mono text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Código 100% de sua propriedade</span>
          </div>
        </div>

        {/* Architectural Horizontal Conduit Line (Desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="h-1 w-full bg-white/[0.08] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 rounded-full transition-all duration-700 shadow-[0_0_15px_rgba(56,189,248,0.7)]"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="grid grid-cols-4 gap-6 pt-3 mono text-[10px] text-zinc-500">
            {steps.map((st, i) => (
              <span key={i} className={`transition-colors ${activeStep >= i ? 'text-blue-400 font-bold' : ''}`}>
                Fase 0{i + 1} &bull; {st.timeframe}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Interactive Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <button
              type="button"
              key={step.number}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              className={`group text-left relative p-6 sm:p-7 rounded-2xl border transition-all duration-500 flex flex-col justify-between gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeStep === idx
                  ? 'bg-[#0E131F] border-blue-500/50 shadow-[0_15px_40px_-10px_rgba(37,99,235,0.35)] -translate-y-1'
                  : 'bg-white/[0.02] border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04]'
              }`}
            >
              {/* Top Row: Number & Icon */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-4xl font-bold font-mono tracking-tight transition-colors ${
                    activeStep === idx ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-400'
                  }`}>
                    {step.number}
                  </span>
                  <div className={`p-2.5 rounded-xl border transition-colors ${
                    activeStep === idx 
                      ? 'bg-blue-600/20 border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.4)]' 
                      : 'bg-white/[0.04] border-white/[0.06]'
                  }`}>
                    {step.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="mono text-[10px] text-zinc-400 block uppercase tracking-wider font-medium">
                    {step.badge}
                  </span>
                  <h3 className="text-xl font-semibold text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>

              {/* Bottom: Deliverables List */}
              <div className="pt-4 border-t border-white/[0.08] space-y-2">
                <span className="mono text-[10px] text-zinc-400 uppercase tracking-widest block font-medium">
                  Entregáveis da Fase:
                </span>
                <div className="space-y-1.5">
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                      <CheckCircle className={`w-3 h-3 shrink-0 ${activeStep === idx ? 'text-blue-400' : 'text-zinc-500'}`} />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Process Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-zinc-300 font-medium">
              Compromisso GEAR: se houver qualquer desvio de escopo, avisamos com antecedência imediata.
            </span>
          </div>
          <span className="mono text-xs text-blue-400">
            SLA de Resposta: &le; 24h úteis &bull; Suporte Pós-Entrega
          </span>
        </div>
      </div>
    </section>
  );
};

export default Process;
