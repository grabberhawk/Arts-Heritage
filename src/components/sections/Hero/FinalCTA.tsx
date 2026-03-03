import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#F5EFE6] py-14 md:py-16 overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#EDE6D8]/40 to-transparent"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center space-y-5">

        <h2 className="font-serif text-3xl md:text-4xl leading-[1.15] text-[#2C2C2C]">
          Preserve a Tradition.
          <br />
          <span className="italic">Carry a Story Forward.</span>
        </h2>

        <div className="flex justify-center items-center gap-2">
          <div className="h-px w-8 bg-[#C9B58C]"></div>
          <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
          <div className="h-px w-8 bg-[#C9B58C]"></div>
        </div>

        <p className="text-sm md:text-base text-[#4A4A4A] max-w-md mx-auto leading-relaxed">
          Discover authentic Indian folk art curated from master artisans
          across regions and generations.
        </p>

        <Button
          asChild
          className="mt-4 bg-[#8B1E3F] hover:bg-[#721834] text-white px-10 py-5 tracking-wide shadow-md"
        >
          <a href="#featured-artworks">Explore the Collection</a>
        </Button>

      </div>
    </section>
  );
}