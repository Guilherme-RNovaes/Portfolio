export interface User {
  name: string
  profession: string;
  age: number;
  cel: string;
  stack: string[];
  languages: string[];
  hero: string;
  about: string;
  moreAbout: string;
  aboutWork: string;
  aboutArch: string;
  imageUrl: string;
  curriculum: string;
}

const ageCalc = (date: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const birthMonth = date.getMonth();
  const actualMonth = today.getMonth();

  if (actualMonth < birthMonth || (actualMonth === birthMonth && today.getDate() < date.getDate())) {
    age--;
  }

  return age;
};

const birthDate = new Date(2000, 6, 24);
const userAge = ageCalc(birthDate);

const userProps: User =
{
  name: 'Guilherme Novaes',
  profession: 'Fullstack Developer',
  age: userAge,
  cel: '(16)98844-8896',
  stack: ['Javascript', 'Typescript', 'React', 'Nextjs', 'Nodejs', 'Expressjs', 'MySQL', 'MongoDB'],
  languages: ['Inglês', 'Português'],
  hero: `Desenvolvedor Fullstack com foco em Javascript, Typescript e React. Ajudo empresas a transformar sonhos em códico. Vamos conversar?`,
  about: `Desenvolvedor autônomo, oferecendo serviços de criação de Landing Pages, E-commerces e Páginas Institucionais que combinam funcionalidade, estética e performance.`,
  moreAbout: `Olá! Sou Guilherme Rogério Novaes, desenvolvedor de ${userAge} anos, apaixonado por criar soluções digitais e explorar as infinitas possibilidades do mundo da tecnologia. Com mais de três anos de experiência na programação, especializei-me na área Fullstack, dominando tanto o desenvolvimento front-end quanto o back-end de aplicações web.\nAlém das habilidades técnicas, sou um profissional comprometido com a entrega de resultados de alta qualidade. Tenho uma abordagem detalhista para o desenvolvimento, buscando sempre aprimorar a usabilidade, performance e design das soluções que construo.\nAtualmente, atuo como desenvolvedor autônomo, oferecendo serviços personalizados como criação de Landing Pages, E-commerces e Páginas Institucionais. Meu objetivo é transformar ideias em soluções digitais que gerem valor, contribuindo para o sucesso dos projetos dos meus clientes com ética, responsabilidade e excelência.`,
  aboutWork: 'Atualmente, atuo como desenvolvedor autônomo, aplicando minha experiência adquirida em projetos como o desenvolvimento de uma aplicação para manutenção e registro de ponto de funcionários. Nesse projeto, fui responsável por criar uma interface amigável e funcional, garantindo eficiência e usabilidade para o cliente.',
  aboutArch: 'O sistema operacional que mais utilizo é o Linux, uma plataforma que comecei a explorar recentemente e estou completamente fascinado por tudo relacionado a ele. E a propósito, utilizo o Arch Linux, um sistema que se concentra principalmente no uso do terminal, permitindo-me ter controle total do sistema apenas por meio dele. Realizei algumas personalizações no meu sistema, incluindo o ambiente gráfico Hyprland, que é baseado em Wayland e Portals. Esse ambiente me oferece a capacidade de realizar customizações incríveis e ter controle total sobre todos os aspectos do meu sistema. Estou muito empolgado para compartilhar mais sobre essa experiência que tem me cativado tanto.\nNo contexto do desenvolvimento, utilizo o Arch Linux e o ambiente gráfico Hyprland para desenvolvimento web. Uma ferramenta essencial nesse processo é o Neovim, um editor de texto altamente configurável que me auxilia no desenvolvimento web, proporcionando recursos avançados de edição e personalização. Com essa combinação, tenho um ambiente de trabalho eficiente e adaptado às minhas necessidades como desenvolvedor. Estou muito empolgado para compartilhar mais sobre essa experiência que tem me cativado tanto.',
  imageUrl: '/images/user-image.png',
  curriculum: 'https://drive.google.com/file/d/18hcNdNSHwiQO6KUnBdv40D2g5co_U9ai/view?usp=sharing',
}

export default userProps;
