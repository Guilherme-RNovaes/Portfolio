'use client'

import userProps from "@/config/user";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    const containerElement = containerRef.current;
    gsap.fromTo(
      ".contact-text-reveal",
      { y: "115%", opacity: "100%" },
      {
        y: "0%",
        ease: "power4.inOut",
        duration: 0.7,
        stagger: 0.5,
        scrollTrigger: {
          trigger: containerElement,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      })
  }, [])
  return (
    <div className="min-h-screen w-screen flex flex-col items-center light bg-background text-foreground pt-20 md:pt-40 px-8 md:px-24 xl:px-36">
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase">Vamos fazer acontecer</h1>
        <h1 className="text-xl max-w-2xl text-center md:text-2xl">{userProps.aboutContact}</h1>
      </div>
    </div >
  )
}

export default Contact;
