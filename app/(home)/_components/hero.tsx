'use client'

import AnimatedLink from "@/app/_components/animated-link";
import { socialProps } from "@/config/social";
import userProps from "@/config/user";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const textContainerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".loader",
      { x: "-100%", scaleY: 0.002 },
      {
        x: "0%",
        ease: "power4.inOut",
        duration: 1.5,
      }
    );

    tl.fromTo(
      ".loader",
      { scaleY: 0.002 },
      {
        scaleY: 1,
        ease: "power4.inOut",
        duration: 1,
      }
    );

    tl.fromTo(
      ".loader-second-bg",
      { scaleY: "0%" },
      {
        scaleY: "100%",
        ease: "power4.inOut",
        duration: 1,
      },
      "-=0.7"
    );

    tl.fromTo(
      ".loader-first-bg",
      { opacity: "100%" },
      {
        opacity: "0%",
        display: "none",
        ease: "power4.inOut",
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.fromTo(
      ".reveal-hero",
      { y: "100%" },
      {
        y: "0%",
        ease: "power4.out",
        duration: 0.7,
        stagger: 0.05,
      }
    );

    tl.fromTo(
      ".reveal-text",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        ease: "power4.out",
        duration: 1,
        stagger: 0.5,
      }
    );
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 loader-first-bg bg-black min-h-screen w-screen z-[150] flex items-center overflow-hidden">
        <div className="w-full loader -translate-x-[100%] min-h-screen bg-white">
          <div className="fixed top-0 left-0 loader-second-bg bg-background min-h-screen w-screen z-[140] flex items-center" />
        </div>
      </div>
      <div className="min-h-screen w-screen flex flex-col items-center justify-between bg-background pb-16 pt-28 px-8">
        <div
          ref={textContainerRef}
          className="flex flex-col w-full overflow-hidden items-center justify-center"
        >
          <h1 className="overflow-hidden text-center text-[9vw] md:text-[10vw] lg:text-[10vw] xl:text-[10rem] font-panchang leading-3 font-regular uppercase">
            {userProps.name.split("").map((char, index) => (
              <span key={index} className="reveal-hero inline-block overflow-hidden translate-y-[115%]">
                {char}
              </span>
            ))}{" "}
          </h1>
          <h1 className="overflow-hidden text-center text-[9vw] md:text-[10vw] lg:text-[10vw] xl:text-[10rem] font-panchang leading-3 font-regular uppercase">
            {userProps.lastName.split("").map((char, index) => (
              <span key={index} className="reveal-hero inline-block overflow-hidden translate-y-[115%]">
                {char}
              </span>
            ))}
          </h1>
        </div>

        <div
          ref={textContainerRef}
          className="flex flex-col lg:flex-row gap-9 w-full justify-between items-start overflow-hidden"
        >
          <h2 className="overflow-hidden font-light text-lg md:text-xl lg:text-xl text-left">
            <span className="reveal-text inline-block overflow-hidden translate-y-[115%] opacity-0 tracking-[5px] md:tracking-[8px]">
              {userProps.profession}
            </span>
          </h2>
          <p className="overflow-hidden max-w-md text-left font-light text-sub text-lg md:text-xl lg:text-xl">
            <span className="reveal-text inline-block overflow-hidden translate-y-[115%] opacity-0">
              {userProps.hero}
            </span>
          </p>
        </div>

        <div
          ref={textContainerRef}
          className="reveal-text flex items-baseline justify-between w-full opacity-0"
        >
          <div>
            <h2 className="font-light text-lg md:text-xl lg:text-xl tracking-[5px] md:tracking-[8px] text-left">
              Socials:
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:gap-10">
            {socialProps.map((props, index) => (
              <AnimatedLink
                href={props.link}
                key={index}
                className="uppercase flex flex-row items-center gap-1 group"
                hasTarget={true}
              >
                {props.name}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </AnimatedLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
