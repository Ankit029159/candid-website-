"use client";
import Link from "next/link";
export default function CompanyInfo() {
  return (
    <section className="bg-[#f8fafc] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 font-semibold mb-4 tracking-wide">
            ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Leading Data & AI Technology Solutions Provider
          </h2>

          <p className="text-gray-600 mb-6">
            <span className="font-semibold text-gray-800">
              CANDID CONTROLS PRIVATE LIMITED
            </span>{" "}
            delivers measurable operational efficiency, productivity gains,
            and cost optimisation for forward-thinking enterprises.
          </p>

          <p className="text-gray-600 mb-8">
            Our expertise spans custom software development, web engineering,
            digital transformation, and AI-driven services — all tailored to
            your unique business challenges.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-4 py-2 bg-white border rounded-lg text-gray-700 shadow-sm">
              Innovation First
            </span>
            <span className="px-4 py-2 bg-white border rounded-lg text-gray-700 shadow-sm">
              Results Driven
            </span>
            <span className="px-4 py-2 bg-white border rounded-lg text-gray-700 shadow-sm">
              Client Focused
            </span>
          </div>

          {/* BUTTON */}
          
<Link
  href="/about"
  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition"
>
  Learn More
</Link>
           
        </div>

        {/* RIGHT BOX */}
        <div className="bg-linear-to-br from-blue-900 to-blue-700 text-white p-10 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-semibold mb-6">
            Why Choose Us?
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="bg-blue-500 p-2 rounded-full">→</span>
              <p>End-to-end technology consulting and delivery</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-blue-500 p-2 rounded-full">→</span>
              <p>Agile development with rapid prototyping</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-blue-500 p-2 rounded-full">→</span>
              <p>Proven expertise in AI, RPA & cloud solutions</p>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-blue-500 p-2 rounded-full">→</span>
              <p>Dedicated teams committed to your success</p>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}