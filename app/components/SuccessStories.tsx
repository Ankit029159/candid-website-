"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const stories = [
  {
    title: "Manufacturing Automation",
    result: "+45% Efficiency",
    desc: "Delivered automation systems improving production efficiency significantly.",
  },
  {
    title: "E-Commerce Scaling",
    result: "10x Traffic",
    desc: "Built scalable architecture handling massive traffic without downtime.",
  },
  {
    title: "AI Analytics",
    result: "-30% Cost",
    desc: "Implemented predictive analytics to reduce operational expenses.",
  },
];

export default function SuccessStories() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      bgRef.current,
      { scale: 1.2, y: 0 },
      {
        scale: 1,
        y: -60,
        scrollTrigger: {
          trigger: bgRef.current,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="relative py-20 md:py-24 overflow-hidden text-white">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/client.jpg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 bbackdrop-blur-sm" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Client Success Stories
          </h2>
          <p className="text-gray-300 mt-3">
            Real impact delivered to our clients.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {stories.map((story, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 bbackdrop-blur-md p-6 rounded-xl border border-white/20 hover:shadow-2xl transition"
            >
              <p className="text-blue-300 text-sm mb-1">
                {story.result}
              </p>

              <h3 className="text-lg font-semibold mb-2">
                {story.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {story.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}