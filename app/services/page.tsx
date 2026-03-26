"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Smartphone,
  Bot,
  BarChart,
  Cpu,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Design",
      desc: "Crafting visually compelling, user-centred web experiences that reflect your brand identity and drive engagement.",
      icon: <Globe size={28} />,
    },
    {
      title: "Web Development",
      desc: "Building scalable web applications with modern frameworks and best practices.",
      icon: <Code size={28} />,
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform and native mobile solutions for seamless user experience.",
      icon: <Smartphone size={28} />,
    },
    {
      title: "Robotic Process Automation",
      desc: "Automating workflows to reduce costs and boost productivity.",
      icon: <Bot size={28} />,
    },
    {
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to grow your business online.",
      icon: <BarChart size={28} />,
    },
    {
      title: "Software Development",
      desc: "Custom software solutions tailored to your business needs.",
      icon: <Cpu size={28} />,
    },
  ];

  return (
    <main className="bg-[#0f172a] text-white">

      {/* HEADER */}
      <section className="py-20 text-center bg-linear-to-b from-[#0f172a] to-[#111827]">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive technology solutions engineered to accelerate your business growth.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* ICON */}
              <div className="text-blue-400 mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 mb-6">
                {service.desc}
              </p>

              {/* CTA */}
              <button className="mt-auto text-blue-400 font-medium relative w-fit">
                Get Started →
                <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>

            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}