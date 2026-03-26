"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#f5f8fb] text-gray-900 min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT: FORM */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg hover:bg-[#1e40af] transition font-medium shadow-md hover:shadow-lg">
              Send Message →
            </button>

          </form>
        </div>

        {/* RIGHT: INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Contact Information
          </h2>

          <div className="space-y-6 mb-8">

            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <MapPin className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="text-gray-600">
                  305, A-Wing, City Vista, Downtown Road, Ashoka Nagar,
                  Kharadi, Pune 411014
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Phone className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91 9527605805</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Mail className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">info@candidcontrols.com</p>
              </div>
            </div>

          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Kharadi,Pune&output=embed"
              width="100%"
              height="250"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>

        </div>

      </div>

    </main>
  );
}