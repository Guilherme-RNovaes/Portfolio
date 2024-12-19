'use client'

import { motion } from "motion/react";
import { fromBottomAnimation } from "@/config/animations";
import userProps from "@/config/user";

const Contact = () => {
  return (
    <div id="services" className="min-h-screen w-screen flex flex-col items-center light bg-background text-foreground pt-40 px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex items-center justify-between w-full mb-40"
      >
        <h1 className="text-9xl font-light tracking-wide">Contato</h1>
        <div className="flex flex-col">
          <p className="max-w-2xl text-right font-light text-3xl">Whatsapp: {userProps.cel}</p>
          <p className="max-w-2xl text-right font-light text-3xl">{userProps.email}</p>
        </div>
      </motion.header>
    </div >
  )
}

export default Contact;
