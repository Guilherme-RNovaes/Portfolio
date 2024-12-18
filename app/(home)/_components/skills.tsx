'use client'

import { motion } from "motion/react";
import { fromBottomAnimation } from "@/config/animations";
import Marquee from "./marquee";
import userProps from "@/config/user";
import SkillCard from "./skill-card";
import { ArrowRightCircle, Code, FileText, LifeBuoy, MonitorSmartphone, Palette } from "lucide-react";

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
      <div className="flex flex-row items-center justify-between gap-4 mb-20">
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
          initial="hidden"
          whileInView="visible"
        >
          <SkillCard icon={ArrowRightCircle} title="Landing Pages que convertem" text="Precisa atrair clientes? Crio páginas de alta performance, otimizadas para SEO e com design voltado para conversões." />
        </motion.div>
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.7 })}
          initial="hidden"
          whileInView="visible"
        >
          <SkillCard icon={MonitorSmartphone} title="Design responsivo" text="Sites incríveis, que funcionam perfeitamente em qualquer dispositivo. Proporciono uma experiência fluida tanto para desktop quanto para mobile." />
        </motion.div>
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.9 })}
          initial="hidden"
          whileInView="visible"
        >
          <SkillCard icon={LifeBuoy} title="Suporte técnico e manutenção" text="Não basta ter um site incrível, ele precisa estar sempre atualizado. Ofereço suporte contínuo para garantir que sua plataforma esteja sempre no topo." />
        </motion.div>
      </div>
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
