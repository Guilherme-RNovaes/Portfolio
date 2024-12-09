import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAlacritty, SiArchlinux, SiBootstrap, SiDocker, SiExpress, SiFirebase, SiFirefox, SiGit, SiGithub, SiLua, SiMariadb, SiMongodb, SiNeovim, SiNextdotjs, SiNextui, SiOracle, SiPostman, SiPrisma, SiRadixui, SiReactrouter, SiStyledcomponents, SiSupabase, SiTailwindcss, SiVercel, SiVim, SiVisualstudiocode, SiVite, SiFastify, SiVuedotjs, SiNuxtdotjs, SiTurso, SiC, SiClerk, SiLazyvim, SiVscodium, SiZendesk, SiTmux, SiSqlite, SiRedux } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export interface skill {
  skill: string;
  icon: IconType;
  stack: string;
}

export const frontEnd: skill[] = [
  {
    skill: 'Html',
    icon: FaHtml5,
    stack: 'frontend',
  },
  {
    skill: 'Css',
    icon: FaCss3Alt,
    stack: 'frontend',
  },
  {
    skill: 'Sass',
    icon: FaSass,
    stack: 'frontend',
  },
  {
    skill: 'Tailwind',
    icon: SiTailwindcss,
    stack: 'frontend',
  },
  {
    skill: 'Bootstrap',
    icon: SiBootstrap,
    stack: 'frontend',
  },
  {
    skill: 'Framer Motion',
    icon: TbBrandFramerMotion,
    stack: 'frontend',
  },
  {
    skill: 'Javascript',
    icon: RiJavascriptFill,
    stack: 'frontend',
  },
  {
    skill: 'Typescript',
    icon: BiLogoTypescript,
    stack: 'frontend',
  },
  {
    skill: 'React',
    icon: FaReact,
    stack: 'frontend',
  },
  {
    skill: 'React Router',
    icon: SiReactrouter,
    stack: 'frontend',
  },
  {
    skill: 'Styled Components',
    icon: SiStyledcomponents,
    stack: 'frontend',
  },
  {
    skill: 'Nextjs',
    icon: SiNextdotjs,
    stack: 'frontend',
  },
  {
    skill: 'Nextui',
    icon: SiNextui,
    stack: 'frontend',
  },
  {
    skill: 'Radix',
    icon: SiRadixui,
    stack: 'frontend',
  },
  {
    skill: 'Vite',
    icon: SiVite,
    stack: 'frontend',
  },
]

export const backEnd: skill[] = [
  {
    skill: 'Javascript',
    icon: RiJavascriptFill,
    stack: 'backend',
  },
  {
    skill: 'Typescript',
    icon: BiLogoTypescript,
    stack: 'backend',
  },
  {
    skill: 'Lua',
    icon: SiLua,
    stack: 'backend',
  },
  {
    skill: 'NodeJs',
    icon: FaNodeJs,
    stack: 'backend',
  },
  {
    skill: 'Express',
    icon: SiExpress,
    stack: 'backend',
  },
  {
    skill: 'Redux',
    icon: SiRedux,
    stack: 'backend',
  },
  {
    skill: 'Fastify',
    icon: SiFastify,
    stack: 'backend',
  },
  {
    skill: 'Prisma',
    icon: SiPrisma,
    stack: 'backend',
  },
  {
    skill: 'Turso',
    icon: SiTurso,
    stack: 'backend',
  },
  {
    skill: 'Clerk',
    icon: SiClerk,
    stack: 'backend',
  },
]

export const dataBase: skill[] = [
  {
    skill: 'MariaDB',
    icon: SiMariadb,
    stack: 'database',
  },
  {
    skill: 'MongoDB',
    icon: SiMongodb,
    stack: 'database',
  },
  {
    skill: 'MySQL',
    icon: GrMysql,
    stack: 'database',
  },
  {
    skill: 'PostgreSQL',
    icon: BiLogoPostgresql,
    stack: 'database',
  },
  {
    skill: 'SQLite',
    icon: SiSqlite,
    stack: 'database',
  },
  {
    skill: 'OracleSQL',
    icon: SiOracle,
    stack: 'database',
  },
  {
    skill: 'Supabase',
    icon: SiSupabase,
    stack: 'database',
  },
  {
    skill: 'Firebase',
    icon: SiFirebase,
    stack: 'database',
  },
  {
    skill: 'Docker',
    icon: SiDocker,
    stack: 'database',
  },
]

export const devEnviroment: skill[] = [
  {
    skill: 'Arch Linux',
    icon: SiArchlinux,
    stack: 'devenviroment',
  },
  {
    skill: 'Alacritty',
    icon: SiAlacritty,
    stack: 'devenviroment',
  },
  {
    skill: 'Kitty',
    icon: BsFillTerminalFill,
    stack: 'devenviroment',
  },
  {
    skill: 'Vim',
    icon: SiVim,
    stack: 'devenviroment',
  },
  {
    skill: 'Neovim',
    icon: SiNeovim,
    stack: 'devenviroment',
  },
  {
    skill: 'Lazyvim',
    icon: SiLazyvim,
    stack: 'devenviroment',
  },
  {
    skill: 'Tmux',
    icon: SiTmux,
    stack: 'devenviroment',
  },
  {
    skill: 'VsCode',
    icon: SiVisualstudiocode,
    stack: 'devenviroment',
  },
  {
    skill: 'VsCodium',
    icon: SiVscodium,
    stack: 'devenviroment',
  },
  {
    skill: 'Git',
    icon: SiGit,
    stack: 'devenviroment',
  },
  {
    skill: 'Github',
    icon: SiGithub,
    stack: 'devenviroment',
  },
  {
    skill: 'Vercel',
    icon: SiVercel,
    stack: 'devenviroment',
  },
  {
    skill: 'Postman',
    icon: SiPostman,
    stack: 'devenviroment',
  },
  {
    skill: 'Firefox',
    icon: SiFirefox,
    stack: 'devenviroment',
  },
  {
    skill: 'Zen',
    icon: SiZendesk,
    stack: 'devenviroment',
  },
]
