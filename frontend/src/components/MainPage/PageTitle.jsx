import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function PageTitle() {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ y: { type: "spring", duration: 1, bounce: 0.12 } }}
      className="text-white bg-yellow-500 p-5"
    >
      <h2 className="font-mono text-4xl font-bold">Hi I'm</h2>
      <h1 className="font-[Orbitron] text-6xl font-black">Amrit Pandey</h1>
    </motion.div>
  );
}
