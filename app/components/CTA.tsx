// export default function CTA() {
//   return (
//     <section className="py-20 px-10">

//       <div className="bg-[#0B1F3A] text-white text-center p-16 rounded-2xl">

//         <h2 className="text-3xl font-bold">
//           Ready to Transform Your Business?
//         </h2>

//         <p className="mt-4 text-gray-300">
//           Let discuss how our technology solutions can help you grow.
//         </p>

//         <button className="mt-6 bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">
//           Start a Conversation →
//         </button>

//       </div>

//     </section>
//   );
// }
"use client";

import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  return (
    <div className="bg-[#0b2545] rounded-2xl py-16 px-6 text-center text-white max-w-4xl mx-auto">

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Ready to Transform Your Business?
      </h2>

      <p className="text-gray-300 mb-8">
        Let discuss how our technology solutions can help you grow.
      </p>

      <button
        onClick={() => router.push("/contact")}   // ✅ THIS LINE IS KEY
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition text-white font-medium"
      >
        Start a Conversation →
      </button>

    </div>
  );
}