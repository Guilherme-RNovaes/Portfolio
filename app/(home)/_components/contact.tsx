'use client'

import userProps from "@/config/user";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import { socialProps } from "@/config/social";
import { ArrowUpRight, CornerDownRight } from "lucide-react";
import { RiArrowRightUpLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".contact-text-reveal",
      { y: "115%", opacity: "100%" },
      {
        y: "0%",
        ease: "power4.inOut",
        duration: 0.7,
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      })
  })
  return (
    <div className="min-h-screen w-screen flex flex-col items-center light bg-background text-foreground py-20 md:py-40 px-8 md:px-24 xl:px-36">
      <header
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4 xl:gap-0 w-full mb-20 md:mb-40"
      >
        <div ref={containerRef} className="overflow-hidden w-full">
          <h1 className="contact-text-reveal translate-y-[115%] text-6xl md:text-7xl xl:text-9xl font-light tracking-wide">Contato</h1>
        </div>
        <div className="flex flex-col items-end w-full">
          <div ref={containerRef} className="overflow-hidden">
            <p className="contact-text-reveal translate-y-[115%] overflow-hidden max-w-2xl text-right font-light text-xl md:text-2xl xl:text-3xl">Whatsapp: {userProps.cel}</p>
          </div>
          <div ref={containerRef} className="overflow-hidden">
            <p className="contact-text-reveal translate-y-[115%] overflow-hidden max-w-2xl text-right font-light text-xl md:text-2xl xl:text-3xl">{userProps.email}</p>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center gap-20 w-full dark bg-background text-foreground rounded-xl px-5 md:px-36 py-16">
        <header>
          <h1 className="text-5xl text-center md:text-8xl lg:text-9xl font-semibold uppercase">Vamos fazer acontecer</h1>
        </header>
        <main className="flex flex-col items-center justify-between gap-10">
          <p className="text-xl max-w-2xl text-center md:text-2xl text-zinc-400">{userProps.aboutContact}</p>
          <button className="w-[250px] h-[80px] md:w-[320px] md:h-[100px] bg-white rounded-xl text-black uppercase font-semibold text-xl md:text-2xl group">
            <Link
              href="https://api.whatsapp.com/send?phone=5516988448896&text=Ol%C3%A1,%20Guilherme!" target="_blank" rel="noreferrer noopener"
              className="flex items-center justify-center gap-2"
            >
              Entre em contato!
              <ArrowUpRight className="w-5 h-5 md:w-15 md:h-15 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          </button>
        </main>
        <footer className="flex flex-col items-center text-zinc-300">
          <p className="uppercase text-xl font-semibold tracking-wide">para mais informações</p>
          <div className="flex flex-row items-center gap-1">
            <CornerDownRight className="w-3 h-3" />
            <p className="font-medium">guilherme00rogerio@gmail.com</p>
          </div>
        </footer>
      </div>
    </div >
  )
}

export default Contact;
