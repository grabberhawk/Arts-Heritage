import ArtworkCard from "@/components/ui/ArtworkCard";
import { artworks } from "@/data/artwork";


export default function Featured() {
  return (
    <section className="bg-[#F5EFE6] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#2C2C2C] mb-4">
            Featured Artworks
          </h2>

          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C9B58C]"></div>
            <div className="w-2 h-2 bg-[#C9B58C] rounded-full"></div>
            <div className="h-px w-10 bg-[#C9B58C]"></div>
          </div>

          <p className="text-base md:text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            A curated selection of authentic Majusha creations.
          </p>
        </div>

        {/* Grid */}
<div className="flex flex-nowrap md:grid md:grid-cols-3 gap-8 md:gap-16 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth pb-6 md:pb-0 no-scrollbar">
  {artworks.map((art) => (
    <ArtworkCard
      key={art.id}
      title={art.title}
      artist={art.artist}
      price={art.price}
      image={art.image}
    />
  ))}
</div>
      </div>
    </section>
  );
}