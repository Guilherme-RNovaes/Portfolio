'use client'

import userProps from "@/config/user";
import { motion } from "motion/react";
import SocialButtons from "./social-buttons";
import { fromBottomAnimation, fromLeftAnimation, fromRightAnimation } from "@/config/animations";
import Image from "next/image";
import Skills from "./skills";

const About = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center text-foreground bg-background pt-20 md:pt-40 px-8 md:px-24 xl:px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex items-start w-full mb-12"
      >
        <h1 className="text-6xl md:text-9xl font-light tracking-wide">Sobre</h1>
      </motion.header>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full overflow-hidden">
        <motion.div
          variants={fromLeftAnimation({ duration: 0.7, delay: 0 })}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-3xl font-medium">Olá, eu me chamo Guilherme</h1>
          <p className="max-w-2xl text-left font-light text-sub text-xl md:text-2xl mb-4">{userProps.about}</p>
          <SocialButtons />
        </motion.div>

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
