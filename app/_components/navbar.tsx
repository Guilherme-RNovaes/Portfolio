"use client"

import { motion } from "motion/react"
import NavbarItems from "./navbar-items";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import NavigationProps from "@/config/navigation";
import { Menu } from "lucide-react";
import NavbarMenu from "./navbar-menu";

const navigationItem = NavigationProps;

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
      className="w-full fixed top-0 flex justify-center pt-2 px-8 items-center z-50"
    >
      <div
        className="bg-black/60 rounded-full backdrop-blur-sm p-2 gap-2 flex items-center shadow-xl shadow-black/20"
      >
        <Button asChild variant='default' className="rounded-full shadow-xl">
          <Link href="/#home">
            <h1 className="text-black font-semibold text-xl">GN</h1>
          </Link>
        </Button>
        <NavbarItems />
        <Button onClick={toggleMenu} className='rounded-full z-50'>
          <Menu />
        </Button>
      </div>
      <NavbarMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </motion.nav>
  )
}

export default Navbar;
