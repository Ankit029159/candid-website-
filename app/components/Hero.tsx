"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  // Cursor tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  // 🔥 Zoom based on hover
  const scale = useSpring(isHovering ? 1.2 : 1.05, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;

    const moveX = (e.clientX / innerWidth - 0.5) * 30;
    const moveY = (e.clientY / innerHeight - 0.5) * 30;

    x.set(moveX);
    y.set(moveY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative h-[75vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* 🌍 Earth Background with smart zoom */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          scale: scale,
          backgroundImage: "url('/images/earth.jpg')",
        }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* 🔥 Glow effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: isHovering
            ? "radial-gradient(circle at center, rgba(59,130,246,0.25), transparent 70%)"
            : "radial-gradient(circle at center, transparent, transparent)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/40 to-black/70" />

      {/* Content */}
      <div className="relative text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Future of Technology
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/services")}
          className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-lg shadow-lg"
        >
          Explore Services
        </motion.button>
      </div>
    </section>
  );
}