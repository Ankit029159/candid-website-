"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Smart Automation System",
    desc: "AI-powered automation for industrial processes.",
  },
  {
    title: "IoT Monitoring Dashboard",
    desc: "Real-time tracking and analytics for devices.",
  },
  {
    title: "Energy Optimization Tool",
    desc: "Reduce energy consumption using smart algorithms.",
  },
];

export default function ProductPage() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-24">
      
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Our Products
        </motion.h1>

        <p className="text-gray-400 mt-4">
          Innovative solutions designed for modern industries.
        </p>
      </div>

      {/* Product Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {product.title}
            </h2>
            <p className="text-gray-400 text-sm">
              {product.desc}
            </p>

            <button className="mt-4 text-blue-400 hover:underline">
              Learn More →
            </button>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

