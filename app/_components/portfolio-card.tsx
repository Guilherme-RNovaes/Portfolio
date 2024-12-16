"use client"

import { Button } from "@/app/_components/ui/button";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { fromLeftAnimation, fromRightAnimation } from "@/config/animations";

type Props = {
  direction: string;
  name: string;
  img: string;
  description: string;
  link: string;
  source: string;
  stacks: string[];
}

const PortfolioCard = ({ direction, name, img, description, stacks, link, source }: Props) => {
  const isRightDirection = direction === 'right'
  return (
    <motion.div
      variants={isRightDirection ? fromLeftAnimation({ duration: 0.8, delay: 0.5 }) : fromRightAnimation({ duration: 0.8, delay: 0.5 })}
      initial="hidden"
      whileInView="visible"
      className={`flex flex-col ${isRightDirection ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full items-center justify-between mb-12 gap-x-6`}
    >
      <Dialog>
        <DialogTrigger className={`relative w-[300px] h-[300px] md:w-[600px] md:h-[450px] mb-8 md:mb-0 rounded-xl cursor-zoom-in overflow-hidden group`}>
          <Image src={img} fill alt="project image" className="rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
        </DialogTrigger>
        <DialogContent className="md:min-w-[1080px] md:pr-12 md:py-2 md:pl-2">
          <Image src={img} width={1920} height={1080} alt="project image" className="rounded-lg" />
        </DialogContent>
      </Dialog>
      <div className={`flex flex-col items-center ${isRightDirection ? 'md:items-start' : 'md:items-end md:text-right'}`}>
        <h1 className="pb-4 text-7xl uppercase">{name}</h1>
        <p className="text-2xl text-zinc-600 font-light pb-4 max-w-xs md:max-w-xl truncate text-wrap">{description}</p>
        <div className={`flex items-center justify-center ${isRightDirection ? 'md:justify-start' : 'md:justify-end'} gap-2 mb-4 flex-wrap`}>
          {stacks.map((stack, index) => (
            <Badge variant="outline" key={index}>
              <p className="text-zinc-500 font-semibold hover:text-zinc-300 transition">{stack}</p>
            </Badge>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Button asChild>
            <Link href={link} target="_blank" rel="noreferrer noopener" className="gap-2">
              <Link2 size={18} />
              Visit Page
            </Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href={source} target="_blank" rel="noreferrer noopener" className="gap-2">
              <Github size={18} />
              Source code
            </Link>
          </Button>
        </div>
      </div>
    </motion.div >
  )
}

export default PortfolioCard;
