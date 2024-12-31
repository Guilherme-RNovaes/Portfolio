'use client'

import { socialProps } from "@/config/social"
import userProps from "@/config/user"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-between bg-background py-14 pt-28 px-8">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex flex-row w-full items-start justify-center"
      >
        <h1 className="text-6xl text-center md:text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[11rem] font-semibold uppercase">{userProps.name} {userProps.lastName}</h1>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row gap-9 w-full justify-between items-start"
      >
        <h2 className="font-light text-lg md:text-xl lg:text-xl tracking-[5px] md:tracking-[8px] text-left">{userProps.profession}</h2>
        <p className="max-w-lg text-left font-light text-gray-500 text-lg md:text-xl lg:text-xl">{userProps.hero}</p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="flex items-baseline justify-between w-full"
      >
        <div>
          <h2 className="font-light text-lg md:text-xl lg:text-xl tracking-[5px] md:tracking-[8px] text-left">Socials:</h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10">
          {socialProps.map((props, index) => (
            <Link
              href={props.link}
              key={index}
              className="-m-1 uppercase flex flex-row items-center gap-1 group"
            >
              {props.name}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection;
