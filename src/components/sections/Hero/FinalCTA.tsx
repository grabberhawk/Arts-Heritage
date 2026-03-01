import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="relative bg-[#F5EFE6] py-12 md:py-14 overflow-hidden">

      {/* Very subtle background accent */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#EDE6D8]/30 to-transparent"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center space-y-4">

        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-[#2C2C2C]">
          Preserve a Tradition.
          <br />
          <span className="italic">Own a Story.</span>
        </h2>

        <div className="flex justify-center items-center gap-2">
          <div className="h-px w-6 bg-[#C9B58C]"></div>
          <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
          <div className="h-px w-6 bg-[#C9B58C]"></div>
        </div>

        <p className="text-sm md:text-base text-[#4A4A4A] max-w-lg mx-auto leading-relaxed">
          Every Majusha artwork carries generations of devotion and craftsmanship.
        </p>

        <Button className="mt-3 bg-[#8B1E3F] hover:bg-[#721834] text-white px-8 py-4 tracking-wide shadow-sm">
          Explore the Collection
        </Button>

      </div>
    </section>
  );
}