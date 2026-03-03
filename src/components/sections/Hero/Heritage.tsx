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
          India’s Living Folk Traditions
        </h2>

        {/* Divider */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="h-px w-8 bg-[#C9B58C]"></div>
          <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
          <div className="h-px w-8 bg-[#C9B58C]"></div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed">
          From the narrative scrolls of Manjusha to the intricate lines of Madhubani,
          from Gond’s vibrant symbolism to the mythological depth of Pattachitra —
          India’s folk arts carry centuries of memory, ritual, and craftsmanship.
          Parampara Arts curates these living traditions for a global audience.
        </p>

      </div>
    </section>
  );
}