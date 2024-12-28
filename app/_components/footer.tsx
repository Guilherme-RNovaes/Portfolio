'use client'

import NavigationProps from "@/config/navigation";
import { socialProps } from "@/config/social";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center px-8 py-16 md:p-16 gap-8">
      <div className="flex flex-row items-start justify-around w-full">
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
              className="uppercase text-zinc-400 hover:text-white transition-colors flex flex-row items-center gap-1"
            >
              <props.icon className="w-4 h-4" />
              <p>{props.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className=" text-zinc-400 flex flex-col items-center text-sm w-full">
        <p>©2025 Todos os direitos reservados.</p>
        <p>Desenvolvido por GN | Dev.</p>
      </div>
    </footer>
  )
}

export default Footer;
