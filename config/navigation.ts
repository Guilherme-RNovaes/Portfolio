export type navigation = {
  name: string;
  href: string;
  id: string;
}

const NavigationProps: navigation[] = [
  {
    name: 'Home',
    href: '/#home',
    id: 'home',
  },
  {
    name: 'Sobre',
    href: '/#about',
    id: 'about',
  },
  {
    name: 'Serviços',
    href: '/#services',
    id: 'services',
  },
  {
    name: 'Portfolio',
    href: '/#portfolio',
    id: 'portfolio',
  },
  {
    name: 'Contato',
    href: '/#contact',
    id: 'contact',
  },
]

export default NavigationProps;
