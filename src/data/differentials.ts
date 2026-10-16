import { Users, Shield, Lightbulb, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const differentials: Differential[] = [
  {
    id: 'atendimento',
    title: 'Atendimento próximo e consultivo',
    description: 'Trabalhamos lado a lado com o cliente para entender cada detalhe do seu negócio.',
    icon: Users,
  },
  {
    id: 'seguranca',
    title: 'Soluções seguras e escaláveis',
    description: 'Tecnologia construída para crescer com o seu negócio, com segurança e estabilidade.',
    icon: Shield,
  },
  {
    id: 'equipe',
    title: 'Equipe especializada e experiente',
    description: 'Profissionais comprometidos com a qualidade e com os melhores resultados para você.',
    icon: Lightbulb,
  },
  {
    id: 'transparencia',
    title: 'Compromisso com prazos e resultados',
    description: 'Comunicação transparente, entregas no prazo e foco total nos seus objetivos.',
    icon: Clock,
  },
];
