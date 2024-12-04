import userProps from "@/config/user";
import { motion } from "motion/react";
import HeroSection from "./_components/hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <HeroSection />
    </div>
  );
}
