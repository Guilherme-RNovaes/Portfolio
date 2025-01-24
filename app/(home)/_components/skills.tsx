'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import userProps from "@/config/user";
import SkillCardsContainer from "./skill-card";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const containerRef = useRef(null);

  useGSAP(() => {
    const skillContainerElement = containerRef.current;
    gsap.fromTo(
      ".skilltext-reveal",
      { y: "115%" },
      {
        y: "0%",
        ease: "power4.inOut",
        duration: 0.7,
        stagger: 0.5,
        scrollTrigger: {
          trigger: skillContainerElement,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play play reverse reverse"
        }
      })
    gsap.fromTo(
      ".skill-card",
      { opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power.inOut",
        stagger: 1,
        scrollTrigger: {
          trigger: skillContainerElement,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
          markers: false,
        },
      }
    )
    gsap.from(
      ".aboutskill-reveal",
      {
        scrollTrigger: {
          trigger: skillContainerElement,
          start: "-10% 90%",
          end: "-10% 20%",
          scrub: true,
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.01,
      },
    )
  })
  return (
    <div className="w-screen flex flex-col items-center pt-20 px-8 md:px-24 xl:px-36">
      <header
        className="flex flex-col items-end justify-between gap-10 w-full mb-20 md:mb-40"
      >
        <div ref={containerRef} className="overflow-hidden w-full">
          <h1 className="skilltext-reveal translate-y-[115%] text-4xl md:text-7xl xl:text-9xl font-light">Como posso ajudar</h1>
        </div>
        <div ref={containerRef} className="max-w-2xl text-right">
          {userProps.aboutSkills.split("").map((char, i) => (
            <span key={i} className="aboutskill-reveal font-light text-xl md:text-2xl xl:text-3xl">
              {char}
            </span>
          ))}
        </div>
      </header>
      <SkillCardsContainer />
    </div >
  )
}

export default Skills;
