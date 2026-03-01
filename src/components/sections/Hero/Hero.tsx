import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] bg-[#F5EFE6] pt-30 flex items-center overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/3 w-125 h-125 bg-[#E8DFD1] rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-10">
            
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#2C2C2C]">
  <span className="block whitespace-nowrap">
    Bringing Majusha Art
  </span>
  <span className="italic block">
    To The World
  </span>
</h1>
            {/* Decorative accent */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#D4C4A8]"></div>
              <div className="w-2 h-2 bg-[#D4C4A8] rounded-full"></div>
              <div className="h-px w-12 bg-[#D4C4A8]"></div>
            </div>

            <p className="text-lg md:text-xl text-[#4A4A4A] max-w-xl leading-relaxed">
              Preserving heritage. Empowering artisans.
              <br />
              Own a piece of living tradition.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button className="bg-[#8B1E3F] hover:bg-[#721834] text-white px-10 py-6 text-sm tracking-widest shadow-md">
                Explore Collection
              </Button>

              <Button
                variant="outline"
                className="border-[#2C2C2C] text-[#2C2C2C] px-10 py-6 text-sm tracking-widest hover:bg-[#2C2C2C] hover:text-white transition-all"
              >
                Become an Artist
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end relative">
            
            {/* Horizontal divider line across section */}
           <div className="absolute left-[-150%] right-[-10%] top-[55%] h-px bg-[#D4C4A8] hidden md:block"></div>

     <div className="relative">
  
  {/* Outer depth layer */}
  <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#E8DFD1]"></div>

  {/* Main frame */}
  <div className="relative border-[3px] border-[#C9B58C] bg-white p-4 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
    
    {/* Inner mat */}
    <div className="border border-[#E5DED0] p-3 bg-[#FAF7F2]">
      <img
        src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=800&q=80"
        alt="Majusha Artwork"
        className="object-cover w-95 md:w-105"
      />
    </div>

  </div>
   
</div>
          </div>

        </div>
      </div>
    </section>
  );
}