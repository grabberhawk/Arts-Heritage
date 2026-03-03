import { Button } from "@/components/ui/button";
import EmpowerArtwork from "@/components/ui/EmpowerArtwork";

export default function Empower() {
  return (
    <section className="bg-[#2A2A2A] text-white py-16 md:py-20 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGE */}
   {/* LEFT IMAGE */}
<div className="flex justify-center lg:justify-start">
  <EmpowerArtwork />
</div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Empowering Traditional Artisans
            </h2>

            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9B58C]"></div>
              <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
              <div className="h-px w-8 bg-[#C9B58C]"></div>
            </div>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
  Across India, traditional artisans carry forward centuries-old practices.
  Parampara Arts provides a global platform where these living traditions
  can be preserved, celebrated, and fairly represented.
</p>

            <Button className="mt-4 bg-[#C9B58C] text-black hover:bg-[#b8a678] px-6 py-5 tracking-wide">
              Join the Collective
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}