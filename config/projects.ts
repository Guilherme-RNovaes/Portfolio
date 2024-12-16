export interface project {
  name: string;
  description: string;
  stacks: string[];
  link: string;
  source: string;
  img: string;
  direction: string;
}

export const projectProps: project[] = [
  {
    name: 'finance-ai',
    description: 'Plataforma de gestão financeira que utiliza IA para monitorar suas movimentações.',
    stacks: [
      'Javascript',
      'Typescript',
      'NextJs',
      'Tailwind',
      'Prisma',
      'PostgreeSQL',
      'Clerk'
    ],
    link: '/production',
    source: 'https://github.com/Guilherme-RNovaes/finance-ai',
    img: '/images/finance_ai.png',
    direction: 'left',
  },
  {
    name: 'casecobra-ecommerce',
    description: 'Aplicação ecommerce com foco em criação de capinhas para iphone, a qual o cliente pode escolher e personalizar sua capinha com sua própria imagem.',
    stacks: [
      'Javascript',
      'Typescript',
      'NextJs',
      'Tailwind',
      'Prisma',
      'MongoDB',
      'Clerk'
    ],
    link: '/production',
    source: 'https://github.com/Guilherme-RNovaes/casecobra',
    img: '/images/case_cobra_ecommerce.png',
    direction: 'right',
  },
  {
    name: 'micro-saas-todo-app',
    description: 'Aplicação micro-saas de lista de tarefas, com foco na criação de listas de tarefas personalizáveis, criação de prazos e lembretes.',
    stacks: [
      'Javascript',
      'Typescript',
      'NextJs',
      'Tailwind',
      'Prisma',
      'SQLite',
      'NextAuth'
    ],
    link: '/production',
    source: 'https://github.com/Guilherme-RNovaes/micro-saas-todo-app',
    img: '/images/micro_saas_todo_app.png',
    direction: 'left',
  },
  {
    name: 'project-master',
    description: 'A aplicação em si é um gerenciador de projetos, com funções como criação de projeto, adição de tarefas, to-do e prazos.',
    stacks: [
      'Javascript',
      'Typescript',
      'NextJs',
      'Tailwind',
      'Prisma',
      'PostgreeSQL',
      'Supabase',
      'NextAuth'
    ],
    link: '/production',
    source: 'https://github.com/Guilherme-RNovaes/project-master',
    img: '/images/project_master.png',
    direction: 'right',
  },
  {
    name: 'wedding-invitation',
    description: 'Aplicação feita com o propósito de servir como um convite para meu casamento, com confirmação de presença e presentes.',
    stacks: [
      'Javascript',
      'Typescript',
      'NextJs',
      'Tailwind',
      'Prisma',
      'PostgreeSQL',
      'Supabase',
      'API',
      'Maps'
    ],
    link: 'https://convite-de-casamento.vercel.app/',
    source: 'https://github.com/Guilherme-RNovaes/wedding-invitation',
    img: '/images/wedding_invitation.png',
    direction: 'left',
  },
  {
    name: 'fsw-barbershop',
    description: 'Aplicação feita com o propósito de servir como um aplicativo para barbearias, as quais podem se cadastrar, mostrar seus serviços, valores e realizar agendamentos.',
    stacks: [
      'Javascript',
      'Typescript',
      'NextJs',
      'Tailwind',
      'Prisma',
      'PostgreeSQL',
      'Supabase',
      'OAuth'
    ],
    link: 'https://fsw-babershop.vercel.app/',
    source: 'https://github.com/Guilherme-RNovaes/fsw-babershop',
    img: '/images/fsw_barber.png',
    direction: 'right',
  },
  {
    name: 'netflix-clone',
    description: "Clone da tela inicial da Netflex feito em React de forma a aplicar tudo que estudei inicialmente em React e meu primeiro consumo de API's com a API TMDB.",
    stacks: [
      'Javascript',
      'React',
      'Html',
      'Css',
      'TMDB API'
    ],
    link: 'https://guilherme-rnovaes.github.io/netflix-react-clone/',
    source: 'https://github.com/Guilherme-RNovaes/netflix-react-clone',
    img: '/images/netflix_clone.png',
    direction: 'left',
  },
  {
    name: 'google-keep-clone',
    description: 'Clone básico do famoso "google Keep" onde foram implementadas as funcionalidades de adicionar e excluir tarefas com título e descrição.',
    stacks: [
      'Javascript',
      'React',
      'Html',
      'Css'
    ],
    link: 'https://google-keep-clone-blond.vercel.app/',
    source: 'https://github.com/Guilherme-RNovaes/google-keep-clone',
    img: '/images/google_keep_clone.png',
    direction: 'right',
  },
  {
    name: 'pearson-hardman',
    description: "Modelo de landing page para advocacias voltado para divulgação e captação de clientes inspirado no seriado 'suits'.",
    stacks: [
      'Javascript',
      'Html',
      'Css'
    ],
    link: 'https://pearson-hardman-one.vercel.app/',
    source: 'https://github.com/Guilherme-RNovaes/pearson-hardman',
    img: '/images/pearson_hardman.png',
    direction: 'left',
  },
  {
    name: 'meu-primeiro-portfolio',
    description: "Este foi meu primeiro portfolio o qual utilizeu por muito tempo, resolvi deixa-lo aqui pois quando o criei tinha acabado de aprender sobre React e este foi meu primeiro desafio a mim mesmo.",
    stacks: [
      'Javascript',
      'React',
      'Html',
      'Css'
    ],
    link: 'https://gnovaes-portfolio-old.vercel.app/',
    source: 'https://github.com/Guilherme-RNovaes/Portfolio',
    img: '/images/first_portfolio.png',
    direction: 'right',
  },
]
