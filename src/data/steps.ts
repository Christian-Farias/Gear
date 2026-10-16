export interface Step {
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Entendemos suas necessidades e objetivos para traçar o melhor caminho.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definimos a melhor estratégia e a tecnologia apropriada para o seu caso.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Construímos com foco em qualidade, segurança e alto desempenho.',
  },
  {
    number: '04',
    title: 'Entrega e Suporte',
    description: 'Garantimos uma transição tranquila e suporte contínuo após a entrega.',
  },
];
