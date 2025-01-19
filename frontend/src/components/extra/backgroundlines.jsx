import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

export default function BackgroundLines() {
    const dropAnimation = {
        hidden: { top: "-50%" },
        visible: (duration) => ({
            top: "110%",
            transition: {
                duration: duration, // Use the random duration
                repeat: Infinity,
                ease: [0.6, 0.05, 0.2, 0.9], // Smoother easing
            },
        }),
    };

    // Function to generate a random duration for the falling animation
    const getRandomDuration = () => {
        return Math.random() * 4 + 8; // Random duration between 8s and 12s
    };

    const linesLocation = ["3%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "97%"];

    return (
        <div className="relative w-[90vw] h-full mx-auto">
            {linesLocation.map((i, index) => {
                const randomDuration = getRandomDuration();

                return (
                    <div key={index} className="absolute top-0 w-[1px] h-full" style={{ left: i }}>
                        <motion.div
                            className="absolute top-[-50%] left-0 w-full h-[15vh] bg-gradient-to-b from-pink-500 via-blue-500 to-purple-500"
                            initial="hidden"
                            animate="visible"
                            variants={dropAnimation}
                            custom={randomDuration}
                            style={{
                                animationDelay: `${Math.random() * 2 + 1}s`,
                            }}
                        />
                    </div>
                )
            })}
        </div>
    );
}