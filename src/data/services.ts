import { Code2, Brain, Zap, BarChart3, Globe, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: 'software',
    title: 'Software',
    description: 'Sistemas sob medida para os seus processos e objetivos específicos.',
    icon: Code2,
  },
  {
    id: 'ia',
    title: 'Inteligência Artificial',
    description: 'Automatize processos, extraia insights e tome decisões com mais precisão.',
    icon: Brain,
  },
  {
    id: 'automacao',
    title: 'Automação',
    description: 'Elimine tarefas manuais e aumente a produtividade da sua equipe.',
    icon: Zap,
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
    description: 'Visualize seus dados de forma clara e estratégica para melhores decisões.',
    icon: BarChart3,
  },
  {
    id: 'sites',
    title: 'Sites',
    description: 'Presença digital moderna, rápida e focada em resultados.',
    icon: Globe,
  },
  {
    id: 'sistemas-aplicativos',
    title: 'Sistemas e Aplicativos',
    description: 'Experiências digitais que conectam você ao seu cliente em qualquer dispositivo.',
    icon: Smartphone,
  },
];
