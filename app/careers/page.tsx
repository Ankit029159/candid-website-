"use client";

import { MapPin, Briefcase } from "lucide-react";

const jobs = [
  {
    title: "Senior Full-Stack Developer",
    type: "Full-time",
    location: "Pune, India",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Pune, India",
  },
  {
    title: "RPA Developer",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time",
    location: "Pune, India",
  },
  {
    title: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">

      {/* HERO */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-b from-[#0B1F3A] to-[#0f172a]">
        <h1 className="text-5xl font-bold mb-4">
          Join Our Team
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          We're always looking for talented individuals who share our passion
          for innovation and excellence.
        </p>
      </section>

      {/* JOB SECTION */}
      <section className="px-6 md:px-20 py-16 bg-[#f8fafc] text-black rounded-t-3xl">

        <div className="text-center mb-12">
          <p className="text-blue-600 uppercase text-sm tracking-wider">
            Open Positions
          </p>
          <h2 className="text-4xl font-bold">
            Current Opportunities
          </h2>
          <p className="text-gray-600 mt-2">
            Explore roles that match your skills and ambitions.
          </p>
        </div>

        {/* JOB LIST */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <h3 className="text-xl font-semibold">
                  {job.title}
                </h3>

                <div className="flex gap-4 text-gray-500 mt-2 text-sm">
                  <span className="flex items-center gap-1">
                    <Briefcase size={16} /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {job.location}
                  </span>
                </div>
              </div>

              <button className="bg-[#0B1F3A] text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Don't see the right role? We'd still love to hear from you.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Send Your Resume
          </button>
        </div>

      </section>
    </main>
  );
}