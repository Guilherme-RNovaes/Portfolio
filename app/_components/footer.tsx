'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import NavigationProps from "@/config/navigation";
import { socialProps } from "@/config/social";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import userProps from "@/config/user";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ".reveal-name",
      { y: "100%" },
      {
        y: "40%",
        ease: "power4.out",
        duration: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "50% 80%",
          end: "50% 80%",
          toggleActions: "play play reverse reverse",
        }
      }
    )
  })

  return (
    <footer ref={footerRef} className="flex flex-col relative overflow-hidden light bg-background text-foreground items-center justify-center px-8 py-16 md:p-16 lg:px-36 gap-8 border-t border-1 border-sub">
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
      <div className="text-sub flex flex-col w-full md:pb-20 lg:pb-36">
        <p className="text-2xl md:text-5xl font-semibold">©2025 Guilherme Novaes</p>
        <p className="text-2xl md:text-5xl font-semibold" >Todos os direitos reservados</p>
      </div>
      <h1 className="font-panchang flex overflow-hidden text-foreground uppercase text-[12vw] font-bold absolute bottom-0">
        {userProps.name.split("").map((char, index) => (
          <span key={index} className="reveal-name translate-y-[115%]">
            {char}
          </span>
        ))}{" "}
      </h1>
    </footer>
  )
}

export default Footer;
