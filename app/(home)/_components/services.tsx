'use client'

import { motion } from "motion/react";
import { fromBottomAnimation } from "@/config/animations";
import userProps from "@/config/user";

const Services = () => {
  return (
    <div id="services" className="min-h-screen w-screen flex flex-col items-center bg-background text-foreground light pt-40 px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex items-center justify-between w-full mb-40"
      >
        <h1 className="text-9xl font-light text-black tracking-wide">Serviços</h1>
        <p className="max-w-2xl text-right font-light text-gray-600 text-3xl">{userProps.aboutServices}</p>
      </motion.header>
    </div >
  )
}

export default Services;
