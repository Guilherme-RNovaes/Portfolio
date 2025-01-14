'use client'

import { fromBottomAnimation } from "@/config/animations";
import { motion } from "motion/react";

interface animatedRowProps {
  text: string;
  leftLine?: boolean;
  halfLine?: boolean;
  halfLine2?: boolean;
  rightLine?: boolean;
}

const AnimatedRow = ({ text, leftLine = true, halfLine = false, halfLine2 = false, rightLine = true }: animatedRowProps) => (
  <motion.div
    variants={fromBottomAnimation({ duration: 0.7, delay: 0.5 })}
    initial="hidden"
    whileInView="visible"
    className="flex flex-row items-center"
  >
    {leftLine && <div className="w-full h-[1px] bg-foreground mt-4" />}
    {halfLine && <div className="w-[35%] h-[1px] bg-foreground mt-4" />}
    {halfLine2 && <div className="w-[45%] md:w-full h-[1px] bg-foreground mt-4" />}
    <h1 className="uppercase md:font-medium text-[3rem] md:text-[7rem] xl:text-[10rem]">{text}</h1>
    {rightLine && <div className="w-full h-[1px] bg-foreground mt-4" />}
  </motion.div>
);

export default AnimatedRow;
