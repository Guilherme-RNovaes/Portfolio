"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { MouseEventHandler } from "react";
import { socialProps } from "@/config/social";
import userProps from "@/config/user";
import NavbarMenuItems from "./navbar-menu-items";
import AnimatedLink from "./animated-link";
import Image from "next/image";

interface navbarMenuOptions {
  isOpen: boolean;
  toggleMenu: MouseEventHandler;
}

const NavbarMenu = ({ isOpen, toggleMenu }: navbarMenuOptions) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen && menuRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        menuRef.current,
        { x: "100%", scaleY: 0.002 },
        { x: "0%", scaleY: 0.002, duration: 0.6 }
      );

      tl.fromTo(
        menuRef.current,
        { scaleY: 0.002 },
        { scaleY: 1, duration: 0.6 }
      );

      tl.fromTo(
        headerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.3" // Inicia antes de terminar a animação anterior
      );

      if (navItemsRef.current.length > 0) {
        tl.fromTo(
          navItemsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2 },
          "-=0.3"
        );
      }

      if (footerRef.current) {
        tl.fromTo(
          footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.4"
        );
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className={`${isOpen ? "flex" : "hidden"} flex-col justify-between fixed inset-0 z-50 h-full pt-6 px-8 pb-12 bg-background`}
    >
      <div ref={headerRef} className="flex justify-between pl-2">
        <Image src="/images/logo-white.svg" alt="GN logo image" width={40} height={40} />
        <button
          className="decoration-transparent hover-target uppercase text-2xl font-medium"
          onClick={toggleMenu}
        >
          close
        </button>
      </div>
      <NavbarMenuItems navItemsRef={navItemsRef} toggleMenu={toggleMenu} />
      <div
        ref={footerRef}
        className="flex flex-col lg:flex-row items-start md:items-center lg:items-baseline gap-8 justify-between"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 md:gap-24 lg:gap-36">
          <div
            onClick={toggleMenu}
            className="flex hover-target items-center text-6xl md:text-8xl font-extralight md:-mb-2 cursor-pointer"
          >
            X
          </div>
          <div className="flex flex-col">
            {socialProps.map((props, index) => (
              <AnimatedLink
                href={props.link}
                key={index}
                className="uppercase flex flex-row items-center gap-1 group"
                hasTarget={true}
              >
                {props.name}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </AnimatedLink>
            ))}
          </div>
          <div className="flex flex-col justify-end">
            <p>{userProps.email}</p>
            <p>{userProps.cel}</p>
          </div>
        </div>
        <h1 className="uppercase text-2xl">Guilherme Novaes</h1>
      </div>
    </div>
  );
};

export default NavbarMenu;
