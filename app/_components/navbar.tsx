"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation";
import NavbarItems from "./navbar-page-items";
import NavbarPageItems from "./navbar-page-items";
import NavbarIdItems from "./navbar-id-items";

const Navbar = () => {

  const router = usePathname();

  const isActiveRoute = (route: string) => {
    return router === route;
  };

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
      transition={{ duration: 0.7, }}
      className="w-full fixed top-0 flex justify-center pt-2 px-8 items-center z-50"
    >
      <div
        className="bg-white/20 rounded-full backdrop-blur-xl p-2 flex items-center shadow-2xl"
      >
        <NavbarPageItems isActiveRoute={isActiveRoute} />
      </div>
      <div className="fixed top-4 right-8">
        <NavbarIdItems />
      </div>
    </motion.nav>
  )
}

export default Navbar;
