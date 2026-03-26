"use client";

import Image from "next/image";

export default function Partners() {
  const logos = [
    "/logos/aws.png",
    "/logos/google.png",
    "/logos/microsoft.png",
    "/logos/salesforce.png",
  ];

  return (
    <section className="py-20 bg-white">

      <h2 className="text-center text-3xl font-bold text-[#0B1F3A] mb-10">
        Our Partners
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap">

          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="h-12 relative w-32">
              <Image
                src={logo}
                alt="partner"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}