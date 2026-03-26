import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import type { ReactNode } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">

        {/* OPTIONAL CURSOR */}
        <Cursor />

        {/* NAVBAR */}
        <Navbar />

        {/* SCROLL WRAPPER (VERY IMPORTANT) */}
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}