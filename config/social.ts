import { Github, Instagram, Linkedin, LucideIcon, Mail } from "lucide-react";
import { IconType } from "react-icons";

export type social = {
  icon: LucideIcon | IconType;
  name: string;
  link: string;
}

export const socialProps: social[] = [
  {
    icon: Github,
    name: 'Github',
    link: 'https://github.com/Guilherme-RNovaes'
  },
  {
    icon: Linkedin,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/guilherme-r-novaes/'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    link: 'https://www.instagram.com/gr.novaes/'
  },
  {
    icon: Mail,
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
