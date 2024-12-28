import NavigationProps from "@/config/navigation";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import { Button } from "./ui/button";
import { socialProps } from "@/config/social";
import userProps from "@/config/user";

interface navbarMenuOptions {
  isOpen: ReactNode;
  toggleMenu: MouseEventHandler;
}

const navigationItem = NavigationProps;

const container = {
  hidden: { opacity: 1, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1.0,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const NavbarMenu = ({ isOpen, toggleMenu }: navbarMenuOptions) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", scaleY: "6%" }}
            animate={{ x: "0%", scaleY: "100%" }}
            transition={{
              x: { duration: 0.6, ease: "easeInOut" },
              scaleY: { duration: 0.4, ease: "easeInOut", delay: 0.6 },
              opacity: { duration: 1.0 }
            }}
            exit={{ opacity: 0 }}
            className="flex flex-col justify-between fixed inset-0 z-50 h-full p-12 bg-black"
          >
            <div>
              <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
                className="flex justify-between"
              >
                <h1 className="font-bold text-2xl">GN</h1>
                <Button
                  variant='link'
                  className="decoration-transparent uppercase text-2xl"
                  onClick={toggleMenu}
                >
                  close
                </Button>
              </motion.header>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="relative flex flex-col md:pl-30 lg:pl-40 text-white"
              >
                {navigationItem.map((props, index) => (
                  <motion.div variants={item} key={index} className="flex justify-start items-center w-full">
                    <Link
                      href={props.href}
                      key={props.name}
                      onClick={toggleMenu}
                      className="flex items-center uppercase text-5xl md:text-7xl group hover:translate-x-12 transition-all"
                    >
                      <ArrowRightIcon className="hidden md:block h-16 w-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {props.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row items-start md:items-center lg:items-end gap-8 justify-between"
            >
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 md:gap-24 lg:gap-36">
                <div
                  onClick={toggleMenu}
                  className="flex items-center text-6xl md:text-8xl font-extralight md:-mb-4 cursor-pointer"
                >
                  X
                </div>
                <div className="flex flex-col">
                  {socialProps.map((props, index) => (
                    <Link
                      href={props.link}
                      key={props.name}
                      className="-m-1 uppercase flex flex-row items-center gap-1 group"
                    >
                      {props.name}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <div className=" flex flex-col justify-end">
                  <p className="-m-[3px]">{userProps.email}</p>
                  <p className="-m-[3px]">{userProps.cel}</p>
                </div>
              </div>
              <h1 className="uppercase text-2xl">Guilherme Novaes</h1>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavbarMenu;
