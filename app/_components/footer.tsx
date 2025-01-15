'use client'

import NavigationProps from "@/config/navigation";
import { socialProps } from "@/config/social";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col relative overflow-hidden light bg-background text-foreground items-center justify-center px-8 py-16 md:p-16 lg:px-36 gap-8 border-t border-1 border-sub">
      <div className="flex flex-row md:flex-col items-start justify-between gap-20 pb-10 w-full">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
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
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-end w-full">
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
      <div className="text-sub flex flex-col w-full pb-16 md:pb-20 lg:pb-36">
        <p className="text-2xl md:text-5xl font-semibold">©2025 Guilherme Novaes</p>
        <p className="text-2xl md:text-5xl font-semibold" >Todos os direitos reservados</p>
      </div>
      <h1 className="font-panchang text-foreground uppercase text-[12vw] tracking-[5px] md:tracking-[10px] font-bold absolute -bottom-6 md:-bottom-14 lg:-bottom-16 xl:-bottom-20">guilherme</h1>
    </footer>
  )
}

export default Footer;
