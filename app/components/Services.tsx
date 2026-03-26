// "use client";

// import { motion } from "framer-motion";

// const stories = [
//   {
//     title: "Manufacturing Automation",
//     result: "+45% Efficiency",
//     desc: "Delivered automation systems improving production efficiency significantly.",
//   },
//   {
//     title: "E-Commerce Scaling",
//     result: "10x Traffic",
//     desc: "Built scalable architecture handling massive traffic without downtime.",
//   },
//   {
//     title: "AI Analytics",
//     result: "-30% Cost",
//     desc: "Implemented predictive analytics to reduce operational expenses.",
//   },
// ];

// export default function SuccessStories() {
//   return (
//     <section className="bg-[#f8fafc] py-20 md:py-24">
      
//       {/* ✅ FIXED CONTAINER */}
//       <div className="max-w-7xl mx-auto px-6 md:px-10">

//         {/* HEADER */}
//         <div className="text-center mb-14">
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F3A] tracking-tight">
//             Client Success Stories
//           </h2>
//           <p className="text-gray-500 mt-3 text-sm md:text-base">
//             Real impact delivered to our clients.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-6">

//           {stories.map((story, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               className="relative bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300 group overflow-hidden"
//             >
//               <div className="absolute top-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300" />

//               <p className="text-blue-600 text-sm font-medium mb-1">
//                 {story.result}
//               </p>

//               <h3 className="text-lg font-semibold text-[#0B1F3A] mb-1">
//                 {story.title}
//               </h3>

//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {story.desc}
//               </p>
//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }