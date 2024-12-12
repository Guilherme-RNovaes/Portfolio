"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation";
import NavbarItems from "./navbar-page-items";
import NavbarPageItems from "./navbar-page-items";
import NavbarIdItems from "./navbar-id-items";
import { Button } from "./ui/button";
import Link from "next/link";

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
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="w-full fixed top-0 flex justify-center pt-2 px-8 items-center z-50"
    >
      <Button asChild variant='default' className="fixed left-8 md:left-12 rounded-full p-6 px-4 shadow-xl">
        <Link href="/#home">
          <h1 className="text-black font-semibold text-xl">GN</h1>
        </Link>
      </Button>
      <div
        className="bg-black/60 rounded-full backdrop-blur-sm p-2 flex items-center shadow-xl shadow-black/20"
      >
        <NavbarPageItems isActiveRoute={isActiveRoute} />
      </div>
      <div className="fixed right-4 md:right-8">
        <NavbarIdItems />
      </div>
    </motion.nav>
  )
}

export default Navbar;
