'use client'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import userProps from "@/config/user";
import { motion } from "motion/react";
import SocialButtons from "./social-buttons";
import { fromBottomAnimation, fromLeftAnimation, fromRightAnimation } from "@/config/animations";
import Image from "next/image";
import Skills from "./skills";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const containerRef = useRef(null);
  const headerRef = useRef(null)

  useGSAP(() => {
    const aboutContainerElement = containerRef.current;
    const aboutHeaderElement = headerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutHeaderElement,
        start: "5% 50%",
        end: "5% 50%",
        toggleActions: "play play reverse reverse"
      }
    })

    tl.fromTo(
      ".abouttext-reveal",
      { y: "115%" },
      {
        y: "0%",
        ease: "power4.inOut",
        duration: 0.7,
        stagger: 0.5,
      }
    )

    gsap.from(
      ".about-reveal",
      {
        scrollTrigger: {
          trigger: aboutContainerElement,
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
    <div ref={headerRef} className="min-h-screen w-screen flex flex-col items-center text-foreground bg-background pt-20 md:pt-40 px-8 md:px-24 xl:px-36">
      <header
        className="flex flex-col items-start justify-between gap-10 md:gap-4 xl:gap-0 w-full mb-20 md:mb-40"
      >
        <div className="overflow-hidden w-full">
          <h1 className="abouttext-reveal translate-y-[115%] text-6xl md:text-7xl xl:text-9xl font-light tracking-wide">Sobre</h1>
        </div>
        <div className="flex flex-col items-end w-full text-4xl md:text-6xl xl:text-7xl text-right font-light">
          <div className="overflow-hidden">
            <h1 className="abouttext-reveal translate-y-[115%] overflow-hidden max-w-2xl">DESENVOLVEDOR</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="abouttext-reveal translate-y-[115%] overflow-hidden max-w-2xl">WEB DESIGNER</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="abouttext-reveal translate-y-[115%] overflow-hidden max-w-2xl">AUTÔNOMO</h1>
          </div>
        </div>
      </header>
      <div className="flex flex-col-reverse lg:flex-row max-w-[1920px] items-center mb-12 md:mb-36 justify-between w-full overflow-hidden">
        <div ref={containerRef} className="max-w-3xl">
          {userProps.about.split("").map((char, i) => (
            <span key={i} className="about-reveal font-light text-xl md:text-2xl xl:text-4xl">
              {char}
            </span>
          ))}
        </div>

        <motion.div
          variants={fromRightAnimation({ duration: 0.7, delay: 0 })}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative flex flex-col gap-2 mb-12 lg:mb-0"
        >
          <Image src='/images/rotate-text.png' width={400} height={400} className="w-[200px] md:w-[400px] h-[200px] md:h-[400px] animate-rotate absolute inset-0 m-auto z-0" alt="rotative text" />
          <Image src={userProps.imageUrl} alt="user image" width={600} height={600} className="object-cover rounded drop-shadow-custom z-10" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-background to-transparent"></div>
        </motion.div>
      </div>
      <Skills />
    </div>
  )
}

export default About;
