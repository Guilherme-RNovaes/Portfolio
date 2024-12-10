"use client"

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface marqueeItemProps {
  items: ReactNode;
  from: string | number;
  to: number | string;
}

const MarqueeItem = ({ items, from, to }: marqueeItemProps) => {
  return (
    <div className="flex MyGradient gap-1">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {items}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {items}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;
