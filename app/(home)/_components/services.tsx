'use client'

import { motion } from "motion/react";
import { fromBottomAnimation, fromLeftAnimation, fromRightAnimation } from "@/config/animations";
import { services } from "@/config/services";
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
        <p className="max-w-2xl text-right font-light text-gray-600 text-4xl">{userProps.aboutServices}</p>
      </motion.header>
      <div className="flex flex-col gap-10 w-full mb-20">
        {services.map((props, index) => (
          <motion.div
            variants={props.side === 'left' ? fromLeftAnimation({ duration: 0.7, delay: 0.5 }) : fromRightAnimation({ duration: 0.7, delay: 0.5 })}
            initial="hidden"
            whileInView="visible"
            key={index}
            className={`${props.side === 'left' ? 'mr-14' : 'ml-14'} flex items-center justify-between border border-gray-400 rounded-full px-10 py-10 gap-20`}
          >
            <h1 className="font-light text-5xl">{props.name}</h1>
            <div className="border border-gray-400 rounded-full px-8 py-2">
              <props.icon size={26} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-10 w-full">
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center"
        >
          <h1 className="uppercase font-medium text-[10rem]">seu</h1>
          <div className="w-full h-[1px] bg-black mt-4" />
        </motion.div>
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center"
        >
          <div className="w-[35%] h-[1px] bg-black mt-4" />
          <h1 className="uppercase font-medium text-[10rem]">sucesso</h1>
          <div className="w-full h-[1px] bg-black mt-4" />
        </motion.div>
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center"
        >
          <div className="w-full h-[1px] bg-black mt-4" />
          <h1 className="uppercase font-medium text-[10rem]">minha</h1>
          <div className="w-full h-[1px] bg-black mt-4" />
        </motion.div>
        <motion.div
          variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
          initial="hidden"
          whileInView="visible"
          className="flex flex-row items-center"
        >
          <div className="w-full h-[1px] bg-black mt-4" />
          <h1 className="uppercase font-medium text-[10rem]">prioridade</h1>
        </motion.div>
      </div>
    </div >
  )
}

export default Services;
