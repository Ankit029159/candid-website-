"use client";

import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2342] text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Careers</li>
            <li>Investors</li>
            <li>Insights</li>
            <li>Partners</li>
            <li>Company Overview</li>
            <li>Client Success</li>
            <li>Press Releases</li>
            <li>Glossary</li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h3 className="font-semibold mb-4 text-orange-400">Industries</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Banking & Financial Services</li>
            <li>Insurance</li>
            <li>Healthcare</li>
            <li>Life Sciences</li>
            <li>Industrial</li>
            <li>Software & Hi-Tech</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4 text-orange-400">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Automation</li>
            <li>Cloud Solutions</li>
            <li>Data & Analytics</li>
            <li>Consulting</li>
          </ul>
        </div>

        {/* CONTACT / SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>

          <p className="text-gray-300 mb-4">
            info@candidcontrols.com
          </p>

          <div className="flex gap-4">
            <div className="p-2 border border-orange-400 rounded-full hover:bg-orange-400 transition">
              <Linkedin size={18} />
            </div>
            <div className="p-2 border border-orange-400 rounded-full hover:bg-orange-400 transition">
              <Twitter size={18} />
            </div>
            <div className="p-2 border border-orange-400 rounded-full hover:bg-orange-400 transition">
              <Facebook size={18} />
            </div>
            <div className="p-2 border border-orange-400 rounded-full hover:bg-orange-400 transition">
              <Instagram size={18} />
            </div>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

        <p>© 2026 Candid Controls Private Limited</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Sitemap</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
        </div>

      </div>

    </footer>
  );
}