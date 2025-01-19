// MouseFollower.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Update mouse position
    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };
    // Add mousemove event listener
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed z-50 w-4 h-4 rounded-full bg-transparent pointer-events-none shadow-lg"
                style={{
                    left: mousePosition.x - 20, // Center the follower
                    top: mousePosition.y - 20, // Center the follower
                }}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 0.5, repeat: Infinity }}
            >
                <div className="w-full h-full rounded-full bg-white opacity-80 shadow-neon" />
            </motion.div>

        </>
    );
};

export default MouseFollower;