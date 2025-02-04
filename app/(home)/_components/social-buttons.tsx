"use client"

import { motion } from "motion/react";
import { Button } from "@/app/_components/ui/button";
import { socialProps } from "@/config/social";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SocialButtons = () => {
  return (
    <div className="flex flex-col gap-6">
      {socialProps.map((social) =>
        <Button
          variant="ghost"
          className="group relative overflow-hidden pl-0 pr-4 pt-2 border-b border-sub text-sub hover:text-background hover:bg-background transition-colors bg-transparent rounded-none"
          asChild
          key={social.name}
        >
          <Link href={social.link} target="_blank" rel="noreferrer noopener">
            <motion.div className="w-full" whileHover="hover">
              <motion.div
                className="absolute inset-0 bg-foreground"
                initial={{ width: 0 }}
                variants={{ hover: { width: "100%" }, }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <div className="flex flex-row items-center justify-between relative z-10 text-2xl uppercase font-light">
                <span>{social.name}</span>
                <ArrowRight className="group-hover:translate-x-4 transition-all" />
              </div>
            </motion.div>
          </Link>
        </Button>
      )}
    </div>
  )
}

export default SocialButtons;
