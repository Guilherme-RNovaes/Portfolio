export type navigation = {
  name: string;
  href: string;
}

const pageNavigationProps: navigation[] = [
  {
    name: 'Início',
    href: '/',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
]

const idNavigationProps: navigation[] = [
  {
    name: 'Home',
    href: '/#home',
  },
  {
    name: 'Sobre',
    href: '/#about',
  },
  {
    name: 'Serviços',
    href: '/#services',
  },
  {
    name: 'Contato',
    href: '/#contact',
  },
]

export default pageNavigationProps;
export { idNavigationProps };
