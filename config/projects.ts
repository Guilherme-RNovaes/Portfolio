export interface project {
  name: string;
  description: string;
  services: string[];
  year: number;
  link: string;
  img: string;
  direction: string;
}

export const projectProps: project[] = [
  {
    name: 'Finanças-AI',
    description: 'Gestão financeira & Inteligencia Artificial',
    services: [
      'Desenvolvimento',
      'API',
      'Banco de dados',
      'Autenticação',
      'Métodos de pagamento'
    ],
    year: 2025,
    link: '/production',
    img: '/images/finance_ai.png',
    direction: 'left',
  },
  {
    name: 'Case-Cobra',
    description: 'E-Commerce & Inteligência Artificial',
    services: [
      'Desenvolvimento',
      'Landing Page',
      'Banco de dados',
      'Autenticação',
      'Metodos de pagamento'
    ],
    year: 2025,
    link: 'https://casecobra-one-teal.vercel.app/',
    img: '/images/case_cobra_ecommerce.png',
    direction: 'right',
  },
  {
    name: 'Francine&Guilherme',
    description: 'Convite de Cerimônia e Festa',
    services: [
      'Desenvolvimento',
      'Landing Page',
      'API',
      'Banco de dados'
    ],
    year: 2024,
    link: 'https://convite-de-casamento.vercel.app/',
    img: '/images/wedding_invitation.png',
    direction: 'left',
  },
  {
    name: 'Barbearia-FSW',
    description: 'Comércio & Barbearia',
    services: [
      'Desenvolvimento',
      'API',
      'Banco de dados'
    ],
    year: 2024,
    link: 'https://fsw-babershop.vercel.app/',
    img: '/images/fsw_barber.png',
    direction: 'right',
  },
]
