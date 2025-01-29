"use client";

import { MouseEventHandler, ReactNode, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import clsx from "clsx";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  hasTarget?: boolean;
  onClick?: MouseEventHandler;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children, className, hasTarget, onClick }) => {
  const linkRef = useRef(null);
  const underlineRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(underlineRef.current, {
      width: "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current, {
      width: "0%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <Link
      href={href}
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={clsx("dark relative", className)}
      target={hasTarget === true ? "_blank" : ""}
      rel="noreferrer noopener"
    >
      {children}
      <span
        ref={underlineRef}
        className="absolute left-0 bottom-0 h-[1px] w-0 bg-foreground transition-all"
        style={{ transition: "none" }}
      ></span>
    </Link>
  );
}

export default AnimatedLink;
