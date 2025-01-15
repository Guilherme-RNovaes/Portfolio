'use client'

import NavigationProps from "@/config/navigation";
import { socialProps } from "@/config/social";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col light bg-background text-foreground items-center justify-center px-8 py-16 md:p-16 lg:px-36 gap-8 border-t border-1 border-sub">
      <div className="flex flex-row items-start justify-between pb-10 w-full">
        <h1 className="font-semibold text-2xl">GN</h1>
        <div className="flex flex-col">
          {NavigationProps.map((props, index) => (
            <Link
              href={props.href}
              key={index}
              className="uppercase flex flex-row items-center gap-1 group"
            >
              {props.name}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          {socialProps.map((props, index) => (
            <Link
              href={props.link}
              key={index}
              className="uppercase text-sub hover:text-foreground transition-colors flex flex-row items-center gap-1"
              target="_blank" rel="noreferrer noopener"
            >
              <props.icon className="w-4 h-4" />
              <p>{props.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="text-sub flex flex-col w-full">
        <p className="text-2xl md:text-5xl font-semibold">©2025 Guilherme Novaes</p>
        <p className="text-2xl md:text-5xl font-semibold" >Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer;
