'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { services } from "@/config/services";
import userProps from "@/config/user";
import AnimatedRow from "./animated-row";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    const servicesContainerElement = containerRef.current;
    gsap.fromTo(
      ".servicestext-reveal",
      { y: "115%" },
      {
        y: "0%",
        ease: "power4.inOut",
        duration: 0.7,
        stagger: 0.5,
        scrollTrigger: {
          trigger: servicesContainerElement,
          start: "-25% 80%",
          end: "-25% 50%",
          toggleActions: "play play reverse reverse",
          markers: true,
        }
      }
    )
    gsap.fromTo(
      ".services-card",
      { opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power.inOut",
        stagger: 1,
        scrollTrigger: {
          trigger: servicesContainerElement,
          start: "top 50%",
          end: "bottom 50%",
          scrub: true,
          markers: false,
        },
      }
    )
    gsap.from(
      ".aboutservices-reveal",
      {
        scrollTrigger: {
          trigger: servicesContainerElement,
          start: "-20% 90%",
          end: "-20% 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.01,
      },
    )
  })
  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-background text-foreground light py-20 md:py-40 px-8 md:px-24 xl:px-36">
      <header
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4 xl:gap-0 w-full mb-20 md:mb-40"
      >
        <div ref={containerRef} className="overflow-hidden w-full">
          <h1 className="servicestext-reveal translate-y-[115%] text-6xl md:text-7xl xl:text-9xl font-light tracking-wide">Serviços</h1>
        </div>
        <div ref={containerRef} className="max-w-2xl text-right">
          {userProps.aboutServices.split("").map((char, i) => (
            <span key={i} className="aboutservices-reveal font-light text-xl md:text-2xl xl:text-3xl">
              {char}
            </span>
          ))}
        </div>
      </header>
      <div ref={containerRef} className="flex flex-col gap-10 w-full mb-20">
        {services.map((props, index) => (
          <div
            key={index}
            className={`${props.side === 'left' ? 'mr-0 md:mr-14 -translate-x-[10%]' : 'mr-0 md:ml-14 translate-x-[10%]'} services-card opacity-0 flex items-center justify-between border border-sub rounded-full px-6 py-6 md:px-10 md:py-10 lg:py-16 md:gap-10 xl:gap-20`}
          >
            <h1 className="font-light text-2xl md:text-3xl lg:text-5xl">{props.name}</h1>
            <div className="border border-sub rounded-full p-4 md:px-6 lg:px-8 md:py-2">
              <props.icon size={26} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:gap-10 w-full">
        <AnimatedRow text="seu" leftLine={false} rightLine={true} />
        <AnimatedRow text="sucesso" leftLine={false} halfLine={true} rightLine={true} />
        <AnimatedRow text="minha" leftLine={false} halfLine2={true} rightLine={true} />
        <AnimatedRow text="prioridade" leftLine={true} rightLine={false} />
      </div>
    </div >
  )
}

export default Services;
