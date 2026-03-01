export default function Heritage() {
  return (
    <section className="bg-[#E8DFD1] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

        {/* Small Label */}
        <p className="uppercase tracking-[0.3em] text-xs text-[#7A6F5A] mb-4">
          The Heritage
        </p>

        {/* Heading */}
        <h2 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4">
          Rooted in Bhagalpur, Bihar
        </h2>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="h-px w-8 bg-[#C9B58C]"></div>
          <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
          <div className="h-px w-8 bg-[#C9B58C]"></div>
        </div>

        {/* Short Description */}
        <p className="text-sm md:text-base text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
          Majusha art narrates the legendary tale of Bihula and Mansa,
          carrying generations of devotion, craftsmanship, and cultural pride.
        </p>

      </div>
    </section>
  );
}