import userProps from "./user";

export type social = {
  name: string;
  link: string;
}

export const socialProps: social[] = [
  {
    name: 'Github',
    link: 'https://github.com/Guilherme-RNovaes'
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/guilherme-r-novaes/'
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/gr.novaes/'
  },
  {
    name: 'Email',
    link: 'mailto:guilherme00rogerio@gmail.com'
  },
  /*
  {
    name: 'Currículo',
    link: userProps.curriculum,
  },
  */
]
