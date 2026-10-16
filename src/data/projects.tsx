import React from 'react';

// Visual mockup components for project cards (demonstrative)
const DashboardVisual: React.FC = () => (
  <div className="w-full h-full flex flex-col gap-1.5 p-4 bg-gear-bg">
    {/* Top bar */}
    <div className="flex items-center gap-2 mb-1">
      <div className="w-2 h-2 rounded-full bg-gear-blue opacity-60" />
      <div className="h-1.5 w-20 rounded bg-gear-border/60" />
      <div className="ml-auto h-1.5 w-10 rounded bg-gear-blue/30" />
    </div>
    {/* Chart area */}
    <div className="flex-1 flex gap-2">
      <div className="flex-1 bg-gear-surface rounded flex flex-col gap-1 p-2">
        {/* Bar chart */}
        <div className="flex-1 flex items-end gap-1">
          {[40, 70, 55, 85, 60, 90, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: i === 5 ? '#087BFF' : 'rgba(8,123,255,0.25)',
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-16 flex flex-col gap-1">
        {['98.2%', '↑12%', '2.4k'].map((v, i) => (
          <div key={i} className="bg-gear-surface rounded p-1.5">
            <div className="text-gear-blue font-bold" style={{ fontSize: 8 }}>{v}</div>
            <div className="h-1 w-6 rounded bg-gear-border/50 mt-0.5" />
          </div>
        ))}
      </div>
    </div>
    {/* Bottom row */}
    <div className="flex gap-1.5">
      {[30, 60, 45, 80].map((w, i) => (
        <div key={i} className="h-1.5 rounded" style={{ width: `${w}px`, background: 'rgba(8,123,255,0.2)' }} />
      ))}
    </div>
  </div>
);

const FinancialAppVisual: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-gear-bg">
    <div className="w-28 h-44 rounded-xl border border-gear-border bg-gear-surface flex flex-col overflow-hidden shadow-lg">
      {/* Screen top */}
      <div className="bg-gear-surface-2 p-2 flex items-center gap-1 border-b border-gear-border/40">
        <div className="w-1.5 h-1.5 rounded-full bg-gear-blue/60" />
        <div className="h-1 w-12 rounded bg-gear-border/50" />
      </div>
      {/* Balance */}
      <div className="p-2 border-b border-gear-border/30">
        <div className="text-gear-text-secondary" style={{ fontSize: 7 }}>Saldo disponível</div>
        <div className="text-gear-blue font-bold" style={{ fontSize: 11 }}>R$ 12.450</div>
      </div>
      {/* Transaction list */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-1.5 px-2 py-1 border-b border-gear-border/20">
          <div className="w-3 h-3 rounded-full bg-gear-surface-2 border border-gear-border/50 shrink-0" />
          <div className="flex-1">
            <div className="h-1 w-10 rounded bg-gear-border/50 mb-0.5" />
            <div className="h-1 w-6 rounded bg-gear-border/30" />
          </div>
          <div className={`font-bold`} style={{ fontSize: 7, color: i % 2 === 0 ? '#087BFF' : '#A7B2C2' }}>
            {i % 2 === 0 ? '+' : '-'}R${i * 150}
          </div>
        </div>
      ))}
      {/* Bottom nav */}
      <div className="mt-auto flex justify-around p-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-4 h-4 rounded"
            style={{ background: i === 2 ? 'rgba(8,123,255,0.3)' : 'rgba(20,43,69,0.6)' }}
          />
        ))}
      </div>
    </div>
  </div>
);

const CorporateSiteVisual: React.FC = () => (
  <div className="w-full h-full bg-gear-bg flex flex-col">
    {/* Browser top */}
    <div className="flex items-center gap-1.5 px-2 py-1.5 bg-gear-surface border-b border-gear-border/40">
      <div className="w-1.5 h-1.5 rounded-full bg-gear-border" />
      <div className="w-1.5 h-1.5 rounded-full bg-gear-border" />
      <div className="w-1.5 h-1.5 rounded-full bg-gear-border" />
      <div className="flex-1 h-2 rounded bg-gear-surface-2 mx-2" />
    </div>
    {/* Site header */}
    <div className="flex items-center px-3 py-1.5 border-b border-gear-border/30">
      <div className="w-6 h-1.5 rounded bg-gear-blue/60 mr-2" />
      <div className="flex gap-2 ml-auto">
        {[1, 2, 3].map(i => <div key={i} className="w-5 h-1 rounded bg-gear-border/50" />)}
      </div>
    </div>
    {/* Hero area */}
    <div className="flex-1 flex flex-col p-3 gap-1.5">
      <div className="h-2 w-3/4 rounded bg-gear-text/20" />
      <div className="h-1.5 w-1/2 rounded bg-gear-text/10" />
      <div className="h-1 w-2/3 rounded bg-gear-border/40 mt-1" />
      <div className="h-1 w-1/2 rounded bg-gear-border/30" />
      <div className="mt-2 flex gap-2">
        <div className="h-4 w-16 rounded bg-gear-blue/70" />
        <div className="h-4 w-12 rounded border border-gear-border/50" />
      </div>
    </div>
  </div>
);

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  visual: React.FC;
}

export const projects: Project[] = [
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: 'Plataforma de indicadores para gestão de resultados com visualização em tempo real.',
    tags: ['Web', 'Dashboard', 'IA'],
    visual: DashboardVisual,
  },
  {
    id: 'app-financeiro',
    title: 'App Financeiro',
    description: 'Controle financeiro inteligente para o dia a dia, com interface clara e acessível.',
    tags: ['Mobile', 'Financeiro', 'UI/UX'],
    visual: FinancialAppVisual,
  },
  {
    id: 'site-corporativo',
    title: 'Site Corporativo',
    description: 'Presença digital moderna para marcas que querem performance e identidade visual forte.',
    tags: ['Web', 'Institucional', 'Performance'],
    visual: CorporateSiteVisual,
  },
];
