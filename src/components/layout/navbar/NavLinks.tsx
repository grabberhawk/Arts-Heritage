import { Button } from "@/components/ui/button";

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
<a href="#explore" className="relative group text-sm font-medium tracking-[0.05em] text-[#2C2C2C]">
  Explore
  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#2C2C2C] transition-all duration-300 group-hover:w-full"></span>
</a>
<a href="#explore" className="relative group text-sm font-medium tracking-[0.05em] text-[#2C2C2C]">
  OurStory
  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#2C2C2C] transition-all duration-300 group-hover:w-full"></span>
</a>
<a href="#explore" className="relative group text-sm font-medium tracking-[0.05em] text-[#2C2C2C]">
  For Artist
  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#2C2C2C] transition-all duration-300 group-hover:w-full"></span>
</a>
<a href="#explore" className="relative group text-sm font-medium tracking-[0.05em] text-[#2C2C2C]">
  Contact Us
  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#2C2C2C] transition-all duration-300 group-hover:w-full"></span>
</a>

      <Button
  variant="outline"
  className="ml-4 border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
>
  Join
</Button>
    </div>
  );
}