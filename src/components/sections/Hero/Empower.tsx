import { Button } from "@/components/ui/button";

export default function Empower() {
  return (
    <section className="bg-[#2A2A2A] text-white py-16 md:py-20 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">

              <div className="relative border border-[#C9B58C] p-3 bg-[#1F1F1F]">
                <img
                  src="https://c8.alamy.com/comp/2AT56TB/indian-woman-artist-worker-doing-fabric-painting-with-brush-on-a-craft-item-at-a-handicraft-fare-at-kolkata-india-2AT56TB.jpg"
                  alt="Majusha Artisan"
                  className="object-cover w-60 sm:w-70 lg:w-[320px] aspect-4/5"
                />
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              Empowering Local Artists
            </h2>

            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[#C9B58C]"></div>
              <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
              <div className="h-px w-8 bg-[#C9B58C]"></div>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
              Many Majusha artists lack access to global audiences.
              Our platform bridges tradition and technology —
              enabling artisans to showcase and sell their work worldwide.
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