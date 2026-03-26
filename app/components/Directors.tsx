export default function Directors() {
  return (
    <section className="py-20 px-10 bg-white">

      <h2 className="text-3xl font-bold text-[#0B1F3A] mb-10">
        Directors
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-6 bg-[#F5F7FA] rounded-lg">
          <h3 className="font-semibold text-lg">Manish Sisodia</h3>
          <p className="text-gray-600">Director</p>
          <p className="text-sm text-gray-500">Appointed: 2015</p>
        </div>

        <div className="p-6 bg-[#F5F7FA] rounded-lg">
          <h3 className="font-semibold text-lg">Sangeeta Sisodia</h3>
          <p className="text-gray-600">Director</p>
          <p className="text-sm text-gray-500">Appointed: 2018</p>
        </div>

      </div>

    </section>
  );
}