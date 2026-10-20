import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Layers, 
  TrendingUp,
  Cpu,
  Activity,
  Send,
  Database,
  Sparkles,
  CheckSquare,
  Square,
  Sliders,
  Unlink,
  Link2
} from 'lucide-react';

interface SolutionItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  example: string;
  techs: string[];
  renderVisual: () => React.ReactNode;
}

const Solutions: React.FC = () => {
  // Signature Interaction State: The Chaos-to-Precision Calibration Matrix
  const [matrixCalibrated, setMatrixCalibrated] = useState<boolean>(true);
  const [calibrationProgress, setCalibrationProgress] = useState<number>(100);

  const [activeIdx, setActiveIdx] = useState(0);
  const [openMobileIdx, setOpenMobileIdx] = useState<number | null>(0);
  
  // Interactive micro-states for each preview
  const [softwareTasks, setSoftwareTasks] = useState([
    { id: 1, text: 'Conciliação bancária Inter & Itaú', done: true },
    { id: 2, text: 'Emissão de NF-e em lote (Sefaz)', done: true },
    { id: 3, text: 'Cálculo de comissões por vendedor', done: false },
  ]);

  const [aiTesting, setAiTesting] = useState(false);
  const [aiPromptResponse, setAiPromptResponse] = useState<string | null>(null);
  const [dashboardHoverDay, setDashboardHoverDay] = useState<number | null>(5);
  const [siteMode, setSiteMode] = useState<'gear' | 'antigo'>('gear');
  const [appTab, setAppTab] = useState<'pedidos' | 'estoque'>('pedidos');

  const toggleTask = (id: number) => {
    setSoftwareTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const runAiSimulation = () => {
    setAiTesting(true);
    setAiPromptResponse(null);
    setTimeout(() => {
      setAiPromptResponse('NF #4928 validada: Fornecedor Metalúrgica Horizonte · Valor R$ 38.400 · 0 inconformidades tributárias.');
      setAiTesting(false);
    }, 600);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setCalibrationProgress(val);
    setMatrixCalibrated(val > 50);
  };

  const chartData = [
    { day: 'Seg', val: 42, revenue: 'R$ 28.400' },
    { day: 'Ter', val: 65, revenue: 'R$ 44.150' },
    { day: 'Qua', val: 52, revenue: 'R$ 35.800' },
    { day: 'Qui', val: 78, revenue: 'R$ 52.900' },
    { day: 'Sex', val: 60, revenue: 'R$ 41.200' },
    { day: 'Sáb', val: 94, revenue: 'R$ 68.300' },
    { day: 'Dom', val: 88, revenue: 'R$ 59.700' },
  ];

  const solutionsList: SolutionItem[] = [
    {
      id: 'software',
      num: '01',
      tag: 'Sob medida',
      title: 'Software',
      subtitle: 'Seu processo é único. O sistema também deveria ser.',
      description: 'Desenvolvimento de plataformas completas de ponta a ponta, sem templates prontos. Arquitetura pensada para o seu modelo operacional.',
      example: 'Cadastro centralizado, regras de comissão específicas e controle financeiro unificado do jeito que sua equipe trabalha.',
      techs: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-xl bg-[#090D15] border border-white/[0.08] p-4 shadow-2xl flex flex-col gap-3 font-sans">
          <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="mono text-xs text-zinc-200 font-semibold">GEAR ERP Core</span>
            </div>
            <span className="text-xs mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
              {softwareTasks.filter(t => t.done).length} de {softwareTasks.length} tarefas prontas
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs mono text-zinc-400 block px-1">Clique para alternar regras do fluxo:</span>
            {softwareTasks.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => toggleTask(t.id)}
                className={`w-full flex items-center justify-between p-3 min-h-[44px] rounded-lg border text-xs text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 touch-manipulation ${
                  t.done ? 'bg-blue-950/20 border-blue-500/30 text-white' : 'bg-white/[0.02] border-white/[0.05] text-zinc-400 hover:text-white'
                }`}
              >
                <span className="pr-2 text-left leading-snug">{t.text}</span>
                {t.done ? (
                  <CheckSquare className="w-4 h-4 text-blue-400 shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-400 shrink-0" />
                )}
              </button>
            ))}
          </div>

          <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex justify-between items-center text-xs">
            <span className="text-zinc-400 text-xs">Status da Integração:</span>
            <span className="text-emerald-400 font-mono font-medium flex items-center gap-1 text-xs">
              <Activity className="w-3.5 h-3.5" /> Sincronizado
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'ia',
      num: '02',
      tag: 'Mais precisão',
      title: 'Inteligência Artificial',
      subtitle: 'IA que assume tarefas repetitivas e deixa o discernimento com você.',
      description: 'Modelos de linguagem (LLMs) ajustados e integrados ao seu banco de dados para triagem documental, extração inteligente e automação conversacional.',
      example: 'Lê centenas de notas fiscais em PDF, categoriza contas a pagar e redige respostas para dúvidas frequentes de clientes.',
      techs: ['OpenAI / Claude', 'LangChain', 'Embeddings', 'Python', 'Vector DB'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-xl bg-[#090D15] border border-white/[0.08] p-4 shadow-2xl flex flex-col gap-3 font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-sky-400" />
              <span className="mono text-xs text-zinc-200">Agente Cognitivo GEAR</span>
            </div>
            <span className="text-xs mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20 font-medium">
              Confiança: 99.4%
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.05] leading-relaxed">
              <span className="text-xs mono text-zinc-400 block mb-0.5">Documento em Análise:</span>
              “Nota Fiscal #4928 — Metalúrgica Horizonte (PDF de 4 páginas)”
            </div>

            <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-white leading-relaxed min-h-[50px] flex items-center">
              {aiTesting ? (
                <div className="flex items-center gap-2 text-blue-300 mono text-xs animate-pulse">
                  <Cpu className="w-4 h-4 animate-spin" />
                  <span>Processando vetores do documento...</span>
                </div>
              ) : (
                <span className="text-xs">
                  {aiPromptResponse || 'Clique abaixo para testar a extração e validação automática em milissegundos.'}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={runAiSimulation}
            disabled={aiTesting}
            className="w-full py-2.5 px-3 min-h-[44px] rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(37,99,235,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 touch-manipulation"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>{aiTesting ? 'Executando Inferência...' : 'Disparar Teste de IA'}</span>
          </button>
        </div>
      ),
    },
    {
      id: 'automacao',
      num: '03',
      tag: 'Tempo de volta',
      title: 'Automação',
      subtitle: 'Se uma pessoa faz a mesma coisa todo santo dia, um script deveria fazer.',
      description: 'Pipelines automatizados que conectam CRMs, ERPs, gateways de pagamento e planilhas em tempo real, sem erros manuais de copiar e colar.',
      example: 'Um pedido pago no e-commerce gera nota fiscal, notifica a expedição e envia o código de rastreamento no WhatsApp sem intervenção humana.',
      techs: ['Webhooks', 'Serverless', 'Message Queues', 'APIs REST', 'Workers'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-xl bg-[#090D15] border border-white/[0.08] p-4 shadow-2xl flex flex-col gap-3 font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="mono text-xs text-zinc-200">Pipeline de Execução em Tempo Real</span>
            </div>
            <span className="mono text-xs text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Ao Vivo
            </span>
          </div>

          <div className="relative py-2">
            <div className="grid grid-cols-3 gap-2 text-center text-xs mono relative z-10">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] flex flex-col items-center gap-1">
                <Database className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-200 font-semibold">Gatilho</span>
                <span className="text-zinc-300 text-xs">Webhook Pedido</span>
              </div>
              <div className="p-2.5 rounded-xl bg-blue-600/30 border border-blue-500/50 flex flex-col items-center gap-1 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <Cpu className="w-4 h-4 text-blue-300 animate-spin" />
                <span className="text-white font-semibold">Regra GEAR</span>
                <span className="text-blue-200 text-xs">Validação Fiscal</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex flex-col items-center gap-1">
                <Send className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Entrega</span>
                <span className="text-zinc-300 text-xs">WhatsApp / ERP</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-400 flex items-center justify-between">
            <span>Latência ponta-a-ponta:</span>
            <span className="text-emerald-400 font-mono font-medium">182ms (Sem erros)</span>
          </div>
        </div>
      ),
    },
    {
      id: 'dashboards',
      num: '04',
      tag: 'Decisão clara',
      title: 'Dashboards',
      subtitle: 'Seus números ao vivo, sem precisar pedir para ninguém.',
      description: 'Painéis analíticos com atualização instantânea que consolidam faturamento, margem de contribuição, funil de vendas e estoque em uma única tela.',
      example: 'Diretoria visualiza o faturamento consolidado de 4 filiais em tempo real, com alerta de margem direto no Telegram.',
      techs: ['Next.js', 'Tailwind', 'ECharts', 'Supabase', 'Analytics'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-xl bg-[#090D15] border border-white/[0.08] p-4 shadow-2xl flex flex-col gap-3 font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="mono text-xs text-zinc-200">Painel Executivo — Faturamento</span>
            </div>
            <span className="flex items-center gap-1 text-xs text-emerald-400 mono">
              <TrendingUp className="w-3 h-3" /> +32.8% YoY
            </span>
          </div>

          <div className="flex justify-between items-baseline pt-1">
            <div>
              <span className="text-xs mono text-zinc-400 uppercase tracking-wider block">Receita Líquida</span>
              <span className="text-2xl font-bold text-white tracking-tight">R$ 482.350</span>
            </div>
            <div className="text-right">
              <span className="text-xs mono text-blue-400 block">
                {dashboardHoverDay !== null ? `${chartData[dashboardHoverDay].day}: ${chartData[dashboardHoverDay].revenue}` : 'Passe o mouse nas barras'}
              </span>
            </div>
          </div>

          <div className="h-28 flex items-stretch gap-1 pt-2">
            {chartData.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onMouseEnter={() => setDashboardHoverDay(idx)}
                onFocus={() => setDashboardHoverDay(idx)}
                onClick={() => setDashboardHoverDay(idx)}
                className="flex-1 h-full min-h-[44px] flex flex-col items-center justify-end gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded touch-manipulation"
                aria-label={`${item.day}: ${item.revenue}`}
              >
                <div className="w-full flex-1 flex flex-col justify-end min-h-0">
                  <div
                    className={`w-full rounded-t transition-all duration-300 ${
                      dashboardHoverDay === idx
                        ? 'bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]'
                        : 'bg-white/10 group-hover:bg-blue-600/50'
                    }`}
                    style={{ height: `${item.val}%` }}
                  />
                </div>
                <span className={`text-xs mono transition-colors ${dashboardHoverDay === idx ? 'text-white font-bold' : 'text-zinc-400'}`}>
                  {item.day}
                </span>
              </button>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'sites',
      num: '05',
      tag: 'Presença digital',
      title: 'Sites',
      subtitle: 'Rápido, claro e com um caminho óbvio até o fechamento de contrato.',
      description: 'Websites de alto padrão com direção de arte editorial, SEO técnico avançado, carregamento sub-segundo e taxas de conversão comprovadas.',
      example: 'Redesign completo de posicionamento que quadruplicou os pedidos de orçamento inbound com LCP de 0.8s.',
      techs: ['React / Vite', 'Next.js', 'Core Web Vitals', 'Tailwind', 'Edge CDN'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-xl bg-[#090D15] border border-white/[0.08] overflow-hidden shadow-2xl flex flex-col font-sans">
          <div className="flex items-center justify-between px-3 py-2 bg-white/[0.04] border-b border-white/[0.08]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 mono text-xs">
              <button
                type="button"
                onClick={() => setSiteMode('gear')}
                className={`px-3 py-2 min-h-[44px] rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 touch-manipulation ${siteMode === 'gear' ? 'bg-blue-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                Com GEAR
              </button>
              <button
                type="button"
                onClick={() => setSiteMode('antigo')}
                className={`px-3 py-2 min-h-[44px] rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 touch-manipulation ${siteMode === 'antigo' ? 'bg-rose-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                Antes
              </button>
            </div>
          </div>

          <div className="p-3.5 space-y-3">
            {siteMode === 'gear' ? (
              <>
                <div className="flex items-center justify-between">
                  <span className="mono text-xs text-zinc-300">Auditoria Google Lighthouse:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-emerald-400">99 / 100 Excelente</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs mono">
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-zinc-400 block">LCP</span>
                    <span className="text-emerald-400 font-bold">0.72s</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-zinc-400 block">CLS</span>
                    <span className="text-emerald-400 font-bold">0.00</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-zinc-400 block">INP</span>
                    <span className="text-emerald-400 font-bold">24ms</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 text-rose-200 text-xs space-y-1">
                <span className="font-bold text-rose-400 block">Site Antigo Lento:</span>
                <p className="text-[11px] text-zinc-300">Tempo de espera de 6.4 segundos. 68% dos visitantes abandonavam antes de carregar o formulário.</p>
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      id: 'sistemas',
      num: '06',
      tag: 'Operação inteira',
      title: 'Sistemas',
      subtitle: 'O sistema que finalmente conversa com o resto da empresa.',
      description: 'Modernização de legados e integração entre softwares existentes para eliminar ilhas de informação e retrabalho entre setores.',
      example: 'Conecta o ERP antigo ao e-commerce moderno e ao CRM dos vendedores, sem ninguém redigitar pedidos.',
      techs: ['Arquitetura Modular', 'Postgres', 'GraphQL', 'OAuth2', 'Microservices'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-xl bg-[#090D15] border border-white/[0.08] p-4 shadow-2xl flex flex-col gap-2.5 font-sans">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span className="mono text-[11px] text-zinc-200">Sincronizador Multissistema</span>
            </div>
            <span className="text-[10px] mono text-blue-400">Ping: 14ms</span>
          </div>

          <div className="space-y-1.5 text-xs">
            {[
              { name: 'Atlas Logística (Bling)', status: 'Sincronizado', val: 'R$ 14.200' },
              { name: 'Norte Engenharia (Omie)', status: 'Auditado', val: 'R$ 8.950' },
              { name: 'Vértice Saúde (Custom)', status: 'Sincronizado', val: 'R$ 29.100' },
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <span className="text-zinc-300 font-medium text-[11px]">{row.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    {row.status}
                  </span>
                  <span className="mono text-[11px] text-zinc-400">{row.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'aplicativos',
      num: '07',
      tag: 'No bolso do cliente',
      title: 'Aplicativos',
      subtitle: 'Experiências móveis que aproximam seu time e seus clientes.',
      description: 'Aplicativos nativos e PWAs otimizados que funcionam mesmo em conexões instáveis, com suporte offline, biometria e notificações push.',
      example: 'Aplicativo de campo para técnicos registra ordens de serviço e fotos mesmo sem internet e sincroniza ao reconectar.',
      techs: ['React Native', 'PWA', 'Offline-First', 'Push Notifications'],
      renderVisual: () => (
        <div className="w-full max-w-sm rounded-2xl bg-[#090D15] border border-white/[0.1] p-3 shadow-2xl flex flex-col gap-2 font-sans mx-auto">
          <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-white/[0.06]">
            <span className="text-[10px] mono text-zinc-400">09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] mono text-emerald-400">PWA Offline-Ready</span>
            </div>
          </div>

          <div className="flex gap-1 p-1 bg-white/[0.03] rounded-lg text-[10px] mono">
            <button
              type="button"
              onClick={() => setAppTab('pedidos')}
              className={`flex-1 py-1 min-h-[24px] rounded transition-all ${appTab === 'pedidos' ? 'bg-blue-600 text-white font-bold' : 'text-zinc-400'}`}
            >
              Pedidos Ativos
            </button>
            <button
              type="button"
              onClick={() => setAppTab('estoque')}
              className={`flex-1 py-1 min-h-[24px] rounded transition-all ${appTab === 'estoque' ? 'bg-blue-600 text-white font-bold' : 'text-zinc-400'}`}
            >
              Estoque Local
            </button>
          </div>

          {appTab === 'pedidos' ? (
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600/30 to-blue-900/20 border border-blue-500/30 space-y-1">
              <span className="text-[10px] mono text-blue-300">Coleta de Campo #819</span>
              <div className="text-xs font-semibold text-white">Inspeção Técnica Aprovada</div>
              <div className="text-[10px] text-zinc-300">Sincronizado automaticamente</div>
            </div>
          ) : (
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1 text-xs">
              <div className="flex justify-between text-zinc-300 text-[11px]">
                <span>Peça Hidráulica A4</span>
                <span className="text-emerald-400 font-mono">14 un.</span>
              </div>
              <div className="flex justify-between text-zinc-300 text-[11px]">
                <span>Sensor Digital S2</span>
                <span className="text-emerald-400 font-mono">28 un.</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 text-center text-[10px] mono pt-1">
            <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300">
              Biometria Ativa
            </div>
            <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-300">
              Modo Offline OK
            </div>
          </div>
        </div>
      ),
    },
  ];

  const current = solutionsList[activeIdx];

  const handleRowClick = (i: number) => {
    setActiveIdx(i);
    setOpenMobileIdx(prev => (prev === i ? null : i));
  };

  return (
    <section className="sec relative py-28 md:py-36 overflow-hidden border-t border-white/[0.08] bg-[#05070B]" id="solucoes">
      {/* Precision Chiaroscuro Atmospheric Illumination */}
      <div 
        className="absolute top-1/4 right-0 w-[45vw] max-w-[650px] h-[550px] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="wrap">
        {/* Section Header */}
        <div className="sec-h grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 md:mb-20">
          <div className="lg:col-span-3 text-xs md:text-sm mono text-blue-400 font-semibold tracking-wider">
            ENGENHARIA SOB MEDIDA
          </div>
          <div className="lg:col-span-9 space-y-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-white">
              <span>Sete jeitos de tirar</span><br />
              <span>peso das <em className="serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">suas costas.</em></span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Três forças combinadas — software proprietário, IA aplicada e pipelines de automação — convertem pontos fragmentados em uma esteira contínua de alta produtividade.
            </p>
          </div>
        </div>

        {/* 
          CALIBRATION MATRIX SIMULATOR
        */}
        <div className="mb-20 p-6 sm:p-8 md:p-10 rounded-3xl bg-[#080C16] border border-white/[0.1] shadow-2xl relative overflow-hidden">
          {/* Background Grid Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <Sliders className="w-5 h-5 text-blue-400" />
              <div>
                <span className="mono text-xs font-semibold text-white block">
                  SIMULADOR DE FLUXO // DA DISPERSÃO À SINCRONIA
                </span>
                <span className="mono text-[11px] text-zinc-400">
                  Compare a operação fragmentada em planilhas com a esteira alinhada pela GEAR
                </span>
              </div>
            </div>

            {/* State Toggle Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-2 p-1 rounded-xl bg-black/50 border border-white/[0.08] mono text-xs">
              <button
                type="button"
                onClick={() => { setMatrixCalibrated(false); setCalibrationProgress(0); }}
                className={`px-3.5 py-2 min-h-[44px] rounded-lg transition-all ${
                  !matrixCalibrated ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Unlink className="w-3.5 h-3.5" />
                  01. Caos Fragmentado
                </span>
              </button>
              <button
                type="button"
                onClick={() => { setMatrixCalibrated(true); setCalibrationProgress(100); }}
                className={`px-3.5 py-2 min-h-[44px] rounded-lg transition-all ${
                  matrixCalibrated ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5" />
                  02. Sincronia GEAR
                </span>
              </button>
            </div>
          </div>

          {/* Slider Scrub Control */}
          <div className="py-4 flex items-center gap-4">
            <span className="mono text-[10px] text-zinc-400 hidden sm:inline">ENTROPIA (0%)</span>
            <input
              type="range"
              min="0"
              max="100"
              value={calibrationProgress}
              onChange={handleSliderChange}
              className="flex-1 h-11 min-w-0 appearance-none cursor-pointer bg-transparent accent-blue-500 [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-lg [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(59,130,246,0.8)] [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-lg [&::-moz-range-track]:bg-zinc-800 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-blue-500"
              aria-label="Calibrador de sincronia operacional"
            />
            <span className="mono text-[10px] text-blue-400 hidden sm:inline">PRECISÃO GEAR (100%)</span>
          </div>

          {/* Interactive Flow Canvas */}
          <div className="pt-6 pb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {/* Node 1: Ingestão de Dados */}
              <div 
                className={`p-5 rounded-2xl border transition-all duration-700 ease-out flex flex-col justify-between min-h-[150px] relative ${
                  matrixCalibrated 
                    ? 'bg-blue-950/20 border-blue-500/30 transform-none' 
                    : 'bg-white/[0.02] border-amber-500/30 rotate-[-2.5deg] translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10px] text-zinc-400">NÓ 01 // CAPTURA</span>
                  <Database className={`w-4 h-4 ${matrixCalibrated ? 'text-blue-400' : 'text-amber-400'}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Fontes de Dados</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {matrixCalibrated ? 'APIs, Webhooks & ERP sincronizados' : 'Planilhas dispersas & digitação manual'}
                  </p>
                </div>
                <div className="mono text-[10px] pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400">LATÊNCIA</span>
                  <span className={matrixCalibrated ? 'text-emerald-400' : 'text-amber-400'}>
                    {matrixCalibrated ? '12ms' : '3 a 5 dias'}
                  </span>
                </div>
              </div>

              {/* Node 2: IA & Processamento */}
              <div 
                className={`p-5 rounded-2xl border transition-all duration-700 ease-out flex flex-col justify-between min-h-[150px] relative ${
                  matrixCalibrated 
                    ? 'bg-blue-950/20 border-blue-500/30 transform-none' 
                    : 'bg-white/[0.02] border-amber-500/30 rotate-[3deg] -translate-y-2'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10px] text-zinc-400">NÓ 02 // INTELIGÊNCIA</span>
                  <Brain className={`w-4 h-4 ${matrixCalibrated ? 'text-sky-400' : 'text-amber-400'}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Triagem Cognitiva</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {matrixCalibrated ? 'Agente LLM extrai e valida regras' : 'Operador humano lendo PDFs um a um'}
                  </p>
                </div>
                <div className="mono text-[10px] pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400">PRECISÃO</span>
                  <span className={matrixCalibrated ? 'text-emerald-400' : 'text-amber-400'}>
                    {matrixCalibrated ? '99.4%' : 'Taxa de erro ~12%'}
                  </span>
                </div>
              </div>

              {/* Node 3: Regras & Conciliação */}
              <div 
                className={`p-5 rounded-2xl border transition-all duration-700 ease-out flex flex-col justify-between min-h-[150px] relative ${
                  matrixCalibrated 
                    ? 'bg-blue-950/20 border-blue-500/30 transform-none' 
                    : 'bg-white/[0.02] border-amber-500/30 rotate-[-1.5deg] translate-y-2'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10px] text-zinc-400">NÓ 03 // MOTOR</span>
                  <Cpu className={`w-4 h-4 ${matrixCalibrated ? 'text-blue-400' : 'text-amber-400'}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Regras de Negócio</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {matrixCalibrated ? 'Validação instantânea no backend' : 'Cálculos em células de Excel soltas'}
                  </p>
                </div>
                <div className="mono text-[10px] pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400">RETRABALHO</span>
                  <span className={matrixCalibrated ? 'text-emerald-400' : 'text-amber-400'}>
                    {matrixCalibrated ? 'Zero' : 'Frequente'}
                  </span>
                </div>
              </div>

              {/* Node 4: Ação & Entrega */}
              <div 
                className={`p-5 rounded-2xl border transition-all duration-700 ease-out flex flex-col justify-between min-h-[150px] relative ${
                  matrixCalibrated 
                    ? 'bg-blue-950/20 border-blue-500/30 transform-none' 
                    : 'bg-white/[0.02] border-amber-500/30 rotate-[2deg] -translate-y-1'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10px] text-zinc-400">NÓ 04 // RESULTADO</span>
                  <Zap className={`w-4 h-4 ${matrixCalibrated ? 'text-emerald-400' : 'text-amber-400'}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Disparo &amp; Entrega</h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    {matrixCalibrated ? 'NF emitida, WhatsApp enviado, ERP atualizado' : 'Pedidos aguardando e-mail manual'}
                  </p>
                </div>
                <div className="mono text-[10px] pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-zinc-400">STATUS</span>
                  <span className={matrixCalibrated ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                    {matrixCalibrated ? '● SINCRONIZADO' : '▲ GARGALO'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Split / Mobile Interactive Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solutions List */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]" id="list">
            {solutionsList.map((s, i) => {
              const isSelected = activeIdx === i;
              const isMobileOpen = openMobileIdx === i;

              return (
                <div key={s.id} className="transition-colors">
                  <button
                    type="button"
                    className={`w-full text-left py-6 md:py-8 flex items-baseline justify-between gap-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg px-2 group ${
                      isSelected ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                    data-cursor
                    onMouseEnter={() => setActiveIdx(i)}
                    onFocus={() => setActiveIdx(i)}
                    onClick={() => handleRowClick(i)}
                    aria-expanded={isSelected}
                  >
                    <div className="flex items-baseline gap-4 md:gap-8">
                      <span className={`mono text-xs md:text-sm transition-colors ${isSelected ? 'text-blue-400 font-bold' : 'text-zinc-400'}`}>
                        {s.num}
                      </span>
                      <span className={`text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight transition-transform duration-300 ${
                        isSelected ? 'translate-x-2 text-white' : 'group-hover:translate-x-1'
                      }`}>
                        {s.title}
                      </span>
                    </div>

                    <span className="mono text-[11px] text-zinc-400 hidden sm:inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                      {s.tag}
                    </span>
                  </button>

                  {/* Mobile expansion view */}
                  <div
                    className={`lg:hidden transition-all duration-500 overflow-hidden px-2 ${
                      isMobileOpen ? 'max-h-[1600px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div data-mock className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
                      <p className="text-base text-zinc-300 font-normal leading-relaxed">
                        {s.subtitle}
                      </p>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {s.description}
                      </p>
                      
                      <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-200">
                        <strong className="text-white font-medium block mb-1">Aplicação prática:</strong>
                        {s.example}
                      </div>

                      <div className="pt-2">
                        {s.renderVisual()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Sticky Visual Panel */}
          <aside
            className="hidden lg:flex lg:col-span-5 sticky top-28 p-7 rounded-2xl bg-gradient-to-b from-[#0C111C] to-[#070A10] border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex-col gap-6 transition-all duration-500"
            aria-live="polite"
          >
            {/* Header Telemetry */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mono text-xs text-zinc-400">
              <span className="text-blue-400 font-semibold">{current.num} / 07</span>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white">
                {current.tag}
              </span>
            </div>

            {/* Interactive Visual Canvas */}
            <div data-mock className="min-h-[260px] p-4 rounded-xl bg-black/40 border border-dashed border-white/[0.12] flex items-center justify-center relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none"
                aria-hidden="true" 
              />
              <div className="relative z-10 w-full transition-all duration-300 animate-fade-in key={current.id}">
                {current.renderVisual()}
              </div>
            </div>

            {/* Core Narrative */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
                {current.subtitle}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Practical Example Box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5">
              <span className="mono text-[10px] text-blue-400 uppercase tracking-wider block font-semibold">
                Caso Prático de Entrega:
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {current.example}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {current.techs.map((tech) => (
                <span
                  key={tech}
                  className="mono text-[10px] text-zinc-400 bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
