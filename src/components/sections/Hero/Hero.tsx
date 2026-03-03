import { Button } from "@/components/ui/button";
import HeroArtwork from "./HeroArtwork";

export default function Hero() {
  return (
    <section className="min-h-svh bg-[#F5EFE6] flex items-center pt-24">

      <div className="w-full px-6 md:px-12">

        <div className="max-w-350 mx-auto grid lg:grid-cols-[0.7fr_1.3fr] items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-[#2C2C2C]">
              Indian Folk Art.
              <br />
              <span className="italic">
                Curated for the World.
              </span>
            </h1>

            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#D4C4A8]"></div>
              <div className="w-1.5 h-1.5 bg-[#D4C4A8] rounded-full"></div>
              <div className="h-px w-8 bg-[#D4C4A8]"></div>
            </div>

            <p className="text-base md:text-lg text-[#4A4A4A] max-w-sm leading-relaxed">
              Discover authentic traditional art — from Manjusha and Madhubani
              to Gond and Pattachitra — directly from master artisans across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="bg-[#8B1E3F] hover:bg-[#721834] text-white px-8 py-5 text-sm tracking-widest shadow-md">
                Explore Collection
              </Button>

              <Button
                variant="outline"
                className="border-[#2C2C2C] text-[#2C2C2C] px-8 py-5 text-sm tracking-widest hover:bg-[#2C2C2C] hover:text-white transition-all"
              >
                Become an Artist
              </Button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <HeroArtwork />
          </div>

        </div>

      </div>
    </section>
  );
}