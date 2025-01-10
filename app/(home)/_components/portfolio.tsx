'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import userProps from "@/config/user";
import PortfolioCard from "@/app/_components/portfolio-card";
import { projectProps } from "@/config/projects";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    const PortfolioContainerElement = containerRef.current;
    gsap.fromTo(
      ".text-reveal",
      { y: "115%" },
      {
        y: "0%",
        ease: "power4.inOut",
        duration: 0.7,
        stagger: 0.5,
        scrollTrigger: {
          trigger: PortfolioContainerElement,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none"
        }
      })
    gsap.fromTo(
      ".portfolio-card",
      { opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power.inOut",
        stagger: 1,
        scrollTrigger: {
          trigger: PortfolioContainerElement,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
          markers: false,
        },
      }
    )
    gsap.from(
      ".fromright-reveal",
      {
        scrollTrigger: {
          trigger: PortfolioContainerElement,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.01,
      },
    )
  })

  const firstProjects = projectProps.slice(0, 4)

  const myProjects = firstProjects.map((props) => (
    <div className="portfolio-card overflow-hidden opacity-0">
      <PortfolioCard
        key={props.name}
        direction={props.direction}
        name={props.name}
        img={props.img}
        description={props.description}
        services={props.services}
        link={props.link}
        source={props.source}
      />
    </div>
  ))

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-background text-foreground pt-20 md:pt-40 px-8 md:px-24 xl:px-36">
      <header
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4 xl:gap-0 w-full mb-20 md:mb-40"
      >
        <div ref={containerRef} className="overflow-hidden w-full">
          <h1 className="text-reveal translate-y-[115%] text-6xl md:text-7xl xl:text-9xl font-light tracking-wide">Portfolio</h1>
        </div>
        <div ref={containerRef} className="max-w-2xl text-right">
          {userProps.aboutProjects.split("").map((char, i) => (
            <span key={i} className="fromright-reveal translate-x-[115%] font-light text-xl md:text-2xl xl:text-3xl">
              {char}
            </span>
          ))}
        </div>
      </header>
      <div ref={containerRef} className="flex flex-col gap-10 md:gap-20 overflow-hidden">
        {myProjects}
      </div>
    </div >
  )
}

export default Portfolio;
