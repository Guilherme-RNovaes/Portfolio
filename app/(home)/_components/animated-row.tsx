'use client'

import { fromBottomAnimation } from "@/config/animations";
import { motion } from "motion/react";

interface animatedRowProps {
  text: string;
  leftLine?: boolean;
  halfLine?: boolean;
  rightLine?: boolean;
}

const AnimatedRow = ({ text, leftLine = true, halfLine = false, rightLine = true }: animatedRowProps) => (
  <motion.div
    variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
    initial="hidden"
    whileInView="visible"
    className="flex flex-row items-center"
  >
    {leftLine && <div className="w-full h-[1px] bg-black mt-4" />}
    {halfLine && <div className="w-[35%] h-[1px] bg-black mt-4" />}
    <h1 className="uppercase font-medium text-[10rem]">{text}</h1>
    {rightLine && <div className="w-full h-[1px] bg-black mt-4" />}
  </motion.div>
);

export default AnimatedRow;
