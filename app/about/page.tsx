export default function AboutPage() {
  return (
    <main className="bg-[#0f172a] text-white">

      {/* HERO */}
      <section className="py-20 text-center bg-linear-to-b from-[#0f172a] to-[#111827]">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the story, vision, and values behind CANDID CONTROLS PRIVATE LIMITED.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <h3 className="text-xl text-blue-400 mb-4">
            Building the Future, One Solution at a Time
          </h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Founded in 2021 by a group of visionary technologists, CANDID CONTROLS PRIVATE LIMITED
            was born from a singular ambition: to make enterprise-grade technology accessible to
            businesses of every scale.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            From our inception, we have been committed to delivering infrastructure consultancy,
            custom software development, web engineering, quality assurance, and comprehensive
            enterprise solutions.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Our approach is rooted in agility and precision. We believe that speed should never
            come at the expense of quality, and that truly transformative solutions emerge when
            deep technical expertise meets a genuine understanding of business challenges.
          </p>

        </div>
      </section>

      {/* CEO MESSAGE */}
      <section className="py-20 px-6 bg-[#111827]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-6">A Message from the CEO</h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            At CANDID CONTROLS, we believe that technology is more than code and infrastructure —
            it is the catalyst for human potential.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Our journey has been defined by an unwavering commitment to innovation, integrity,
            and impact. We invest deeply in our people because we know that exceptional talent
            is the foundation of exceptional results.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            To our clients: we don&apos;t just deliver projects — we build partnerships. Your success
            is our success.
          </p>

          {/* QUOTE BOX */}
          <div className="mt-10 p-6 bg-[#1e293b] rounded-2xl border border-gray-700 italic text-gray-300">
            “Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.”
            <br />
            <span className="block mt-3 text-blue-400">— Swami Vivekananda</span>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Humility</h3>
              <p className="text-gray-400">
                We approach every challenge with openness, valuing diverse perspectives and continuous learning.
              </p>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Empathy</h3>
              <p className="text-gray-400">
                We deeply understand our clients&apos; needs, building solutions that genuinely solve their problems.
              </p>
            </div>

            <div className="bg-[#1e293b] p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-white">Accountability</h3>
              <p className="text-gray-400">
                We take full ownership of our commitments, delivering on every promise with transparency and integrity.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}