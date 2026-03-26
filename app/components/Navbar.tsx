"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Product", href: "/product" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

  return (
    <nav className="fixed top-0 w-full bg-white/80 bbackdrop-blur-md shadow-sm px-6 md:px-10 py-4 flex justify-between items-center z-50">

      {/* LOGO */}
      <h1 className="font-bold text-xl text-[#0B1F3A]">
        Candid Controls
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex space-x-8 text-gray-700 relative">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="relative group"
            >
              <span
                className={`transition-colors duration-300 ${
                  isActive ? "text-orange-500" : "hover:text-orange-500"
                }`}
              >
                {link.name}
              </span>

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>

      {/* CTA BUTTON
      <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
        Contact
      </button> */}

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-lg ${
                pathname === link.href
                  ? "text-orange-500"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}