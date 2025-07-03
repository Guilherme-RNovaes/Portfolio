"use client"

import { motion } from "motion/react"
import NavbarItems from "./navbar-items";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import NavbarMenu from "./navbar-menu";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <motion.nav
      initial={{
        y: -20,
        opacity: 0,
        scale: 1
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full fixed top-0 flex justify-center p-2 md:p-6 items-center z-50"
    >
      <div
        className="gap-2 w-full flex flex-row justify-between items-center "
      >
        <Button asChild variant='default' className="rounded-sm shadow-xl">
          <Link href="/#home">
            <Image src="/images/logo-dark.svg" alt="GN logo image" width={40} height={40} />
          </Link>
        </Button>
        <NavbarItems />
        <Button onClick={toggleMenu} className='rounded-sm z-50 shadow-xl'>
          <div className="flex flex-col items-center justify-between gap-1">
            <div className="bg-background w-10 h-[2px]" />
            <div className="bg-background w-10 h-[2px]" />
          </div>
        </Button>
      </div>
      <NavbarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </motion.nav>
  )
}

export default Navbar;
