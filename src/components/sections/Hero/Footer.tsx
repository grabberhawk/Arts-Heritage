import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#3A2A20] text-[#E8DFD1] overflow-hidden">

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-[0.12]"></div>

      {/* Gold top border */}
      <div className="absolute top-0 left-0 w-full h-0.75 bg-linear-to-r from-transparent via-[#C9B58C] to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">

          {/* LEFT */}
          <div className="space-y-3 max-w-md">
            <h3 className="font-serif text-2xl text-white">
              Majusha Collective
            </h3>
            <p className="text-sm text-[#D5C8B2] leading-relaxed">
              Bringing authentic Majusha art from local artisans to a global audience.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-4">

            <div className="flex items-center gap-6 text-sm tracking-wide">
              <a href="#" className="hover:text-[#C9B58C] transition-colors">
                Explore
              </a>
              <span className="text-[#7A6F5A]">|</span>
              <a href="#" className="hover:text-[#C9B58C] transition-colors">
                For Artists
              </a>
              <span className="text-[#7A6F5A]">|</span>
              <a href="#" className="hover:text-[#C9B58C] transition-colors">
                About
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#BFAE95]">
              <Instagram size={16} />
              <span>@majusha.collective</span>
            </div>

          </div>

        </div>

        {/* Bottom Divider */}
        <div className="mt-10 pt-6 border-t border-[#5C4636] text-center text-xs text-[#A3927B]">
          © {new Date().getFullYear()} Majusha Collective. All rights reserved.
        </div>

      </div>
    </footer>
  );
}