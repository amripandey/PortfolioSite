import React from "react";
import { motion } from 'framer-motion';

export default function About() {

  const wordVariants = {
    hidden: { scale: 14, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.8, // 800ms delay for each word
        duration: 0.8,
        ease: "easeOutCirc",
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: { duration: 1, ease: "easeOutExpo", delay: 1 },
    },
  };

  const words = ["About", "Me"]; // Replace with your words

  return (
    <section className="w-full grid grid-cols-2 px-5 py-10">
      {/* Introduction */}
      <div className="p-4 leading-5	text-lg	shadow-md	shadow-[#F0DFF0] rounded-md bg-[#FF007A] text-white">
        <h1 className="mx-3	mt-[8px] mb-[4px] font-bold block">So, Who am I</h1>
        <p className="block my-2">
          I am a dedicated and enthusiastic computer science student with a strong passion for technology, problem-solving, and innovation. My journey in tech is fueled by curiosity and a drive to create impactful solutions through coding and design. I thrive in collaborative environments and constantly seek opportunities to learn, adapt, and grow in this ever-evolving field.
        </p>
      </div>
      {/* Tools and enxperience */}
      <div className="">

      </div>
      {/* contact Information */}
      <div></div>
    </section >
  );
}
