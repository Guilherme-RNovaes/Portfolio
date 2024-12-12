'use client'

import userProps from "@/config/user";
import { motion } from "motion/react";
import SocialButtons from "./social-buttons";
import { fromBottomAnimation, fromLeftAnimation, fromRightAnimation } from "@/config/animations";
import Image from "next/image";
import Skills from "./skills";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen flex flex-col items-center bg-background pt-20 px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex items-start w-full mb-12"
      >
        <h1 className="text-9xl font-light tracking-wide">Sobre</h1>
      </motion.header>
      <div className="flex flex-row items-center justify-between w-full">
        <motion.div
          variants={fromLeftAnimation({ duration: 0.7, delay: 0 })}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="flex flex-col gap-2"
        >
          <h1 className="text-5xl font-medium">Olá, eu me chamo Guilherme</h1>
          <p className="max-w-2xl text-left font-light text-gray-500 text-2xl mb-4">{userProps.about}</p>
          <SocialButtons />
        </motion.div>

        <motion.div
          variants={fromRightAnimation({ duration: 0.7, delay: 0 })}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="relative flex flex-col gap-2 mr-20"
        >
          <Image src='/images/rotate-text.png' width={400} height={400} className="animate-rotate absolute inset-0 m-auto z-0" alt="rotative text" />
          <Image src={userProps.imageUrl} alt="user image" width={600} height={600} className="object-cover rounded drop-shadow-custom z-10" />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black to-transparent"></div>
        </motion.div>
      </div>
      <Skills />
    </div >
  )
}

export default About;
