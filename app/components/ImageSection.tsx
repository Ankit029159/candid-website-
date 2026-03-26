// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function ImageSection() {

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.utils.toArray<HTMLElement>(".parallax").forEach((el) => {
//       gsap.to(el, {
//         y: -80, // smoother, less aggressive
//         scrollTrigger: {
//           trigger: el,
//           scrub: true,
//         },
//       });
//     });
//   }, []);

//   return (
//     <section
//       className="parallax h-[60vh] md:h-[65vh] flex items-center justify-center text-white relative"
//       style={{
//         backgroundImage: "url('/images/earth.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* 🔥 OVERLAY (premium look) */}
//       <div className="absolute inset-10 bg-black/40" />

//       {/* TEXT */}
//       <div className="relative max-w-3xl mx-auto text-center px-6">
//         <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
//           Future of Technology
//         </h1>

//         <p className="text-gray-300 mt-3 text-sm md:text-base">
//           Building intelligent systems for a smarter tomorrow.
//         </p>
//       </div>
//     </section>
//   );
// }