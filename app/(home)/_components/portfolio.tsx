'use client'

import { motion } from "motion/react";
import { fromBottomAnimation } from "@/config/animations";
import userProps from "@/config/user";
import PortfolioCard from "@/app/_components/portfolio-card";
import { projectProps } from "@/config/projects";

const Portfolio = () => {
  const firstProjects = projectProps.slice(0, 4)
  const myProjects = firstProjects.map((props) => (
    <PortfolioCard
      key={props.name}
      direction={props.direction}
      name={props.name}
      img={props.img}
      description={props.description}
      services={props.services}
      link={props.link}
      source={props.source}
    />
  ))

  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-background text-foreground pt-20 md:pt-40 px-8 md:px-24 xl:px-36">
      <motion.header
        variants={fromBottomAnimation({ duration: 0.7, delay: 0 })}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-4 xl:gap-0 w-full mb-20 md:mb-40"
      >
        <h1 className="text-6xl md:text-7xl xl:text-9xl font-light tracking-wide">Portfolio</h1>
        <p className="max-w-2xl text-right font-light text-xl md:text-2xl xl:text-3xl">{userProps.aboutProjects}</p>
      </motion.header>
      <div className="flex flex-col gap-10 md:gap-20 overflow-hidden">
        {myProjects}
      </div>
    </div >
  )
}

export default Portfolio;
