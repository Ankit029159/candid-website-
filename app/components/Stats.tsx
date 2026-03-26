"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 120, suffix: "+", label: "Projects Completed" },
  { number: 80, suffix: "+", label: "Happy Clients" },
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 24, suffix: "/7", label: "Support Available" },
];

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-[#020617] to-[#0f172a] py-20 md:py-24 text-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full top-10 left-10" />
      <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Our Impact
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Delivering measurable results across industries.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 bbackdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
            >
              {/* NUMBER */}
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
                <CountUp end={item.number} duration={2} />
                {item.suffix}
              </h3>

              {/* LABEL */}
              <p className="text-gray-300 mt-2 text-sm">
                {item.label}
              </p>

              {/* HOVER LINE */}
              <div className="mt-4 h-[2px] w-0 bg-blue-500 mx-auto group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}