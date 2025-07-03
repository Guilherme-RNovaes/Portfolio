export interface project {
  name: string;
  services: string[];
  year: number;
  link: string;
  imgMobile: string;
  imgDesktop: string;
  direction: string;
}

export const projectProps: project[] = [
  {
    name: 'Psicóloga-Francine',
    services: [
      'Landing Page',
    ],
    year: 2025,
    link: 'https://lp-francine-sanches.vercel.app/',
    imgMobile: '/images/psicologa_francine_mobile.png',
    imgDesktop: '/images/psicologa_francine_desktop.png',
    direction: 'left',
  },
  {
    name: 'Francine & Guilherme',
    services: [
      'Landing Page',
    ],
    year: 2024,
    link: 'https://convite-de-casamento.vercel.app/',
    imgMobile: '/images/wedding_invitation_mobile.png',
    imgDesktop: '/images/wedding_invitation_desktop.png',
    direction: 'right',
  },
  {
    name: 'Finanças-AI',
    services: [
      'Landing Page',
    ],
    year: 2025,
    link: '/production',
    imgMobile: '/images/finance_ai.png',
    imgDesktop: '/images/finance_ai.png',
    direction: 'left',
  },
  {
    name: 'Barbearia-FSW',
    services: [
      'Landing Page',
    ],
    year: 2024,
    link: 'https://fsw-babershop.vercel.app/',
    imgMobile: '/images/fsw_barber.png',
    imgDesktop: '/images/fsw_barber.png',
    direction: 'right',
  },
]
