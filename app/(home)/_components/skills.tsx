'use client'

import { motion } from "motion/react";
import { fromBottomAnimation } from "@/config/animations";
import Marquee from "./marquee";
import userProps from "@/config/user";

const Skills = () => {
  return (
    <div className="w-screen flex flex-col items-center mb-36 pt-20 px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center w-full mb-12 gap-2"
      >
        <h1 className="text-5xl font-semibold">Minhas Skills</h1>
        <p className="max-w-3xl text-center font-light text-gray-500 text-2xl mb-4">{userProps.aboutSkills}</p>
      </motion.header>
      <motion.div
        variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
        initial="hidden"
        whileInView="visible"
        className="container mx-auto w-full flex justify-center items-center overflow-x-hidden"
      >
        <Marquee />
      </motion.div>
    </div >
  )
}

export default Skills;
