export interface User {
  name: string
  lastName: string
  profession: string;
  cel: string;
  email: string;
  hero: string;
  about: string;
  aboutSkills: string;
  aboutServices: string;
  aboutProjects: string;
  aboutContact: string;
  imageUrl: string;
  curriculum: string;
}

const userProps: User =
{
  name: 'Guilherme',
  lastName: 'Novaes',
  profession: 'Desenvolvedor Fullstack',
  cel: '(16)98844-8896',
  email: 'guilherme00rogerio@gmail.com',
  hero: 'Transformo ideias em código eficiente e soluções digitais que fazem a diferença. Que tal conversarmos?',
  about: 'Desenvolvedor autônomo, especializado em criar soluções digitais como Landing Pages, E-commerces e Páginas Institucionais, unindo funcionalidade, design e alta performance para potencializar sua presença online.',
  aboutSkills: 'Descubra as tecnologias que fazem parte do meu dia a dia! Aqui, você encontrará as ferramentas, linguagens, aplicativos e sistemas que utilizo para desenvolver com eficiência.',
  aboutServices: 'Transformo ideias em soluções digitais. Com expertise em React e desenvolvimento full-stack, ofereço serviços personalizados para atender às suas necessidades, incluindo:',
  aboutProjects: 'Conheça alguns dos projetos que desenvolvi! Aqui estão exemplos de soluções digitais que combinam criatividade, funcionalidade e tecnologia para atender às necessidades de cada cliente.',
  aboutContact: 'Entre em contato e vamos transformar suas ideias em realidade. Estou à disposição para criar soluções digitais sob medida para você ou sua empresa!',
  imageUrl: '/images/user-image.png',
  curriculum: 'https://drive.google.com/file/d/18hcNdNSHwiQO6KUnBdv40D2g5co_U9ai/view?usp=sharing',
}

export default userProps;
