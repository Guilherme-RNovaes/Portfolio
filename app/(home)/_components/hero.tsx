'use client'

import { Button } from "@/app/_components/ui/button"
import userProps from "@/config/user"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col gap-6 items-center pb-6"
      >
        <h1 className="font-semibold text-8xl tracking-wide">{userProps.name}</h1>
        <h2 className="text-8xl font-extralight tracking-[6px] md:tracking-[15px]">{userProps.profession}</h2>
      </motion.div>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="flex flex-col gap-6 items-center pb-6"
      >
        <p className="max-w-4xl text-center font-light text-gray-500 text-4xl">{userProps.about}</p>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        className="flex flex-col gap-6 items-center"
      >
        <Button variant='default' asChild className="group rounded-full">
          <Link href='/'>
            Entre em contato
            <span className="group-hover:translate-x-1 transition-all">
              <ArrowRight />
            </span>
          </Link>
        </Button>
      </motion.div>
    </>
  )
}

export default HeroSection;
