"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const industries = [
  {
    name: "Banking & Finance",
    image: "/images/banking.jpg",
  },
  {
    name: "Software & IT",
    image: "/images/software.jpg",
  },
  {
    name: "Industrial Automation",
    image: "/images/industrial.jpg",
  },
  {
    name: "Life Sciences",
    image: "/images/life.jpg",
  },
  {
    name: "Healthcare",
    image: "/images/healthcare.jpg",
  },
  {
    name: "Insurance",
    image: "/images/insurance.jpg",
  },
];

export default function Industries() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      bgRef.current,
      { scale: 1.3 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: bgRef.current,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="relative py-20 md:py-24 text-white overflow-hidden">

      {/* 🔥 BACKGROUND IMAGE */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/impact.jpg')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Industries We Serve
          </h2>
          <p className="text-gray-300 mt-3">
            Delivering solutions across diverse industries.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {industries.map((item, i) => (
            <div
              key={i}
              className="relative h-56 rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 group-hover:from-black/60 transition" />

              {/* TEXT */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}