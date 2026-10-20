import React, { useState } from 'react';
import { 
  TrendingUp, 
  Gauge, 
  FileSpreadsheet
} from 'lucide-react';

interface CaseStudy {
  id: string;
  num: string;
  category: string;
  segment: string;
  title: string;
  tags: string[];
  problem: string;
  solution: string;
  implementation: string;
  techs: string[];
  metricNumber: string;
  metricLabel: string;
  impactBadge: string;
  accentBorder: string;
  accentGlow: string;
  renderVisual: () => React.ReactNode;
}

const Projects: React.FC = () => {
  const [activeTabCase1, setActiveTabCase1] = useState<'depois' | 'antes'>('depois');

  const cases: CaseStudy[] = [
    {
      id: 'dashboard-clinicas',
      num: '01',
      category: 'BI & Integração de Dados',
      segment: 'Rede de Clínicas Médicas',
      title: 'Dashboard Analytics & Faturamento Unificado',
      tags: ['Web', 'Dashboard Executivo', 'Automação ETL', 'PostgreSQL'],
      problem: 'O fechamento financeiro mensal demorava 3 dias inteiros, exigindo que 4 gerentes compilassem e colassem dados de 3 softwares diferentes em planilhas Excel.',
      solution: 'Plataforma unificada com atualização em tempo real via conectores de banco de dados, alertas de conciliação e DRE automática por unidade.',
      implementation: 'Modelagem de dados centralizada, pipelines de sincronização agendados, controle granular de acessos e alertas por e-mail e Telegram.',
      techs: ['Next.js', 'PostgreSQL', 'FastAPI', 'Docker', 'Tailwind'],
      metricNumber: '−94%',
      metricLabel: 'de tempo despendido no fechamento',
      impactBadge: '3 dias úteis → 20 minutos',
      accentBorder: 'hover:border-cyan-500/40',
      accentGlow: 'from-cyan-500/10 via-transparent to-transparent',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#090D16] rounded-2xl border border-white/[0.08] shadow-2xl space-y-4">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="mono text-xs text-white font-medium truncate">Clínica Vida — Painel Consolidado</span>
            </div>
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/[0.06] mono text-[10px]">
              <button
                type="button"
                onClick={() => setActiveTabCase1('depois')}
                className={`px-2 py-1 min-h-[24px] rounded transition-all ${activeTabCase1 === 'depois' ? 'bg-blue-600 text-white font-semibold' : 'text-zinc-400'}`}
              >
                Automatizado
              </button>
              <button
                type="button"
                onClick={() => setActiveTabCase1('antes')}
                className={`px-2 py-1 min-h-[24px] rounded transition-all ${activeTabCase1 === 'antes' ? 'bg-rose-600 text-white font-semibold' : 'text-zinc-400'}`}
              >
                Antes (Manual)
              </button>
            </div>
          </div>

          {activeTabCase1 === 'depois' ? (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <span className="mono text-[10px] text-zinc-400 block">Tempo de Consolidação</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">20 min</span>
                  <span className="text-[10px] text-zinc-400 block mt-0.5">Sincronizado às 06:00 diárias</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <span className="mono text-[10px] text-zinc-400 block">Faturamento Auditado</span>
                  <span className="text-xl font-bold text-white font-mono">R$ 1.42M</span>
                  <span className="text-[10px] text-cyan-400 block mt-0.5">100% conciliado</span>
                </div>
              </div>

              {/* Graphical simulation bars */}
              <div className="space-y-1.5">
                <span className="mono text-[10px] text-zinc-400">Eficiência por Unidade:</span>
                <div className="space-y-2">
                  {[
                    { unit: 'Unidade Jardins', pct: 98, val: 'R$ 620k' },
                    { unit: 'Unidade Faria Lima', pct: 94, val: 'R$ 490k' },
                    { unit: 'Unidade Moema', pct: 91, val: 'R$ 310k' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-zinc-300 w-28 truncate text-[11px]">{row.unit}</span>
                      <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      <span className="mono text-[11px] text-zinc-400 w-16 text-right">{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200 space-y-2 text-xs animate-fade-in">
              <div className="flex items-center gap-2 text-rose-400 font-semibold">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Processo Antigo em Planilhas:</span>
              </div>
              <p className="leading-relaxed text-zinc-300">
                &bull; 72 horas mensais gastas copiando extratos bancários manualmente.<br />
                &bull; Divergências frequentes entre sistema de prontuário e máquina de cartão.<br />
                &bull; Diretoria recebia relatórios com 15 dias de atraso.
              </p>
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] mono text-zinc-400 pt-2 border-t border-white/[0.06]">
            <span>Status: Em Produção há 14 meses</span>
            <span className="text-emerald-400">Disponibilidade: 99.98%</span>
          </div>
        </div>
      ),
    },
    {
      id: 'app-financeiro',
      num: '02',
      category: 'Mobile & Operação',
      segment: 'Comércio Varejista',
      title: 'App de Gestão Financeira & Caixa Diário',
      tags: ['Mobile First', 'PWA Instalável', 'Gestão de Caixa', 'UI/UX'],
      problem: 'Controle de fluxo de caixa realizado em cadernos físicos e mensagens soltas de WhatsApp entre funcionários e proprietário, gerando furos recorrentes de estoque e caixa.',
      solution: 'Aplicativo ultra-rápido para lançamento em 2 toques no balcão, com fechamento de caixa guiado, saldo consolidado e conciliação de maquininhas de cartão.',
      implementation: 'Arquitetura PWA leve que abre instantaneamente em smartphones básicos, com modo offline e sincronização em lote.',
      techs: ['React', 'TypeScript', 'Tailwind', 'PWA', 'SQLite/IndexedDB'],
      metricNumber: '+12h',
      metricLabel: 'por semana devolvidas aos proprietários',
      impactBadge: 'Caderno de papel → App em 30 dias',
      accentBorder: 'hover:border-emerald-500/40',
      accentGlow: 'from-emerald-500/10 via-transparent to-transparent',
      renderVisual: () => (
        <div className="w-full h-full flex items-center justify-center p-3">
          <div className="w-full max-w-64 rounded-3xl bg-[#080C14] border-2 border-white/[0.12] p-4 shadow-2xl flex flex-col gap-3 font-sans relative">
            <div className="flex justify-between items-center text-[10px] mono text-zinc-400 border-b border-white/[0.08] pb-2">
              <span className="font-semibold text-white">GEAR Pay &amp; Caixa</span>
              <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">Online</span>
            </div>

            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-blue-950/20 to-transparent border border-emerald-500/30">
              <span className="text-[10px] mono text-emerald-300 block">Saldo em Caixa Hoje</span>
              <span className="text-2xl font-bold text-white font-mono tracking-tight">R$ 14.890,50</span>
              <div className="flex items-center gap-1.5 mt-1 text-[10px] text-emerald-400 mono">
                <TrendingUp className="w-3 h-3" />
                <span>+18.4% vs semana anterior</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[10px] mono text-zinc-400 block px-1">Últimos lançamentos (balcão):</span>
              {[
                { desc: 'Venda Débito #810', val: '+R$ 240,00', pos: true },
                { desc: 'Fornecedor Hortifruti', val: '-R$ 680,00', pos: false },
                { desc: 'Venda Pix #811', val: '+R$ 155,00', pos: true },
              ].map((t, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs">
                  <span className="text-zinc-300 text-[11px]">{t.desc}</span>
                  <span className={`mono font-semibold text-[11px] ${t.pos ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {t.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="mono text-[9px] text-zinc-400">Zero treinamento necessário &bull; 2 toques</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'site-corporativo',
      num: '03',
      category: 'Web Experience & Performance',
      segment: 'Serviços Corporativos B2B',
      title: 'Plataforma Institucional de Alta Conversão',
      tags: ['Design Editorial', 'Performance Extrema', 'SEO Avançado', 'Conversão'],
      problem: 'Website institucional defasado com tempo de carregamento superior a 6 segundos no mobile, gerando perda massiva de tráfego pago e baixíssima geração de leads qualificados.',
      solution: 'Redesign completo de posicionamento com copy persuasiva, carregamento instantâneo (sub-segundo) e fluxo direto de captura de propostas com qualificação prévia.',
      implementation: 'Construção estática otimizada para Edge CDN, compressão de imagens de última geração (AVIF/WebP) e pontuação máxima no Google PageSpeed.',
      techs: ['Vite', 'React', 'Tailwind', 'Edge Workers', 'Google Analytics 4'],
      metricNumber: '2,3×',
      metricLabel: 'mais pedidos de contato qualificados',
      impactBadge: 'Lighthouse 99 · LCP 0,8 s',
      accentBorder: 'hover:border-blue-500/40',
      accentGlow: 'from-blue-500/10 via-transparent to-transparent',
      renderVisual: () => (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#090D16] rounded-2xl border border-white/[0.08] shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-emerald-400" />
              <span className="mono text-xs text-white font-medium">Auditoria Google Lighthouse Oficial</span>
            </div>
            <span className="mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
              Classe A+
            </span>
          </div>

          {/* Lighthouse 4 pillars metric circles */}
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { label: 'Performance', score: 99 },
              { label: 'Acessibilidade', score: 100 },
              { label: 'Boas Práticas', score: 100 },
              { label: 'SEO', score: 100 },
            ].map((p, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center font-mono font-bold text-sm text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)]">
                  {p.score}
                </div>
                <span className="mono text-[9px] text-zinc-400 mt-1">{p.label}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2 text-xs">
            <div className="flex justify-between items-center text-zinc-300">
              <span className="text-[11px]">Tempo de Carregamento (LCP):</span>
              <span className="mono font-semibold text-emerald-400">0.82 segundos</span>
            </div>
            <div className="flex justify-between items-center text-zinc-300">
              <span className="text-[11px]">Taxa de Conversão Inbound:</span>
              <span className="mono font-semibold text-blue-400">4.8% (Média do setor: 1.2%)</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] mono text-zinc-400 pt-2 border-t border-white/[0.06]">
            <span>Hospedagem: Edge Global CDN</span>
            <span className="text-zinc-300">SSL Automático A+</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="sec cases relative py-24 md:py-36 border-t border-white/[0.08] bg-[#05070B]" id="casos">
      <div className="wrap">
        {/* Section Header */}
        <div className="sec-h grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-14 md:mb-20">
          <div className="lg:col-span-3 text-xs md:text-sm mono text-blue-400 font-semibold tracking-wider">
            CASOS DE ESTUDO REAIS
          </div>
          <h2 className="lg:col-span-9 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-white">
            <span>Resultado é o que</span><br />
            <span>fica no <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">caixa.</em></span>
          </h2>
        </div>

        {/* Case Cards Cascade (Natural scrolling on mobile, sticky stacking on lg desktop) */}
        <div className="space-y-12 md:space-y-16">
          {cases.map((c, idx) => (
            <article
              key={c.id}
              className={`relative lg:sticky rounded-3xl p-6 sm:p-8 md:p-12 border border-white/[0.12] ${c.accentBorder} bg-[#0A0D15]/95 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden group`}
              style={{
                top: `calc(100px + ${idx * 26}px)`,
              }}
            >
              {/* Subtle top edge glow border */}
              <div 
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" 
                aria-hidden="true" 
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${c.accentGlow} opacity-30 pointer-events-none`}
                aria-hidden="true" 
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                {/* Left: Narrative & Business Metric */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mono text-xs text-blue-400 font-semibold uppercase tracking-wider">
                        Caso {c.num} — {c.segment}
                      </span>
                      <span className="text-zinc-500">&bull;</span>
                      <span className="mono text-xs text-zinc-400">
                        {c.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug">
                      {c.title}
                    </h3>

                    {/* Problem -> Solution -> Implementation Triad */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                      <div className="space-y-1.5">
                        <span className="mono text-[11px] text-zinc-400 font-semibold uppercase tracking-wider block">
                          Problema
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {c.problem}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="mono text-[11px] text-blue-400 font-semibold uppercase tracking-wider block">
                          Solução GEAR
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {c.solution}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="mono text-[11px] text-zinc-400 font-semibold uppercase tracking-wider block">
                          Como foi feito
                        </span>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {c.implementation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Metric */}
                  <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono tracking-tight text-white leading-none">
                        {c.metricNumber}
                      </div>
                      <span className="text-sm sm:text-base text-zinc-400 mt-1 block">
                        {c.metricLabel}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
                        {c.impactBadge}
                      </span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {c.techs.map((tech) => (
                          <span
                            key={tech}
                            className="mono text-[10px] text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Rich Interactive Visual Representation */}
                <div data-mock className="lg:col-span-5 flex flex-col justify-between min-h-[300px] lg:border-l lg:border-white/[0.08] lg:pl-8">
                  {c.renderVisual()}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial footnote */}
        <div className="mt-12 text-center">
          <p className="mono text-xs text-zinc-400">
            * Casos de estudo representativos da metodologia e arquitetura de entrega da GEAR Tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
