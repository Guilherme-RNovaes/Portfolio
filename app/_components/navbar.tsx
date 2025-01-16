"use client"

import { motion } from "motion/react"
import NavbarItems from "./navbar-items";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import NavbarMenu from "./navbar-menu";

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
        <Button asChild variant='default' className="rounded-xl shadow-xl">
          <Link href="/#home">
            <h1 className="text-black font-semibold text-xl">GN</h1>
          </Link>
        </Button>
        <NavbarItems />
        <Button onClick={toggleMenu} className='rounded-xl z-50 shadow-xl'>
          <Menu />
          <span className="hidden md:block">Menu</span>
        </Button>
      </div>
      <NavbarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </motion.nav>
  )
}

export default Navbar;
