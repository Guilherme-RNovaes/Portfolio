'use client'

import { motion } from "motion/react";
import { fromBottomAnimation } from "@/config/animations";
import userProps from "@/config/user";

const Contact = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center light bg-background text-foreground pt-20 md:pt-40 px-8 md:px-24 xl:px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4 xl:gap-0 w-full mb-20 md:mb-40"
      >
        <h1 className="text-6xl md:text-7xl xl:text-9xl font-light tracking-wide">Contato</h1>
        <div className="flex flex-col w-full">
          <p className="max-w-2xl text-right font-light text-xl md:text-2xl xl:text-3xl">Whatsapp: {userProps.cel}</p>
          <p className="max-w-2xl text-right font-light text-xl md:text-2xl xl:text-3xl">{userProps.email}</p>
        </div>
      </motion.header>
    </div >
  )
}

export default Contact;
