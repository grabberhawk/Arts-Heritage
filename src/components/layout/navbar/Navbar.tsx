import { useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest("nav")) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener("click", handleClickOutside);
  }

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [isOpen]);
return (
  <>
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5EFE6]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
    >
    
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-18 flex items-center justify-between">
          <NavLogo />
          <NavLinks />

       
          <MobileMenuButton onClick={() => setIsOpen((prev) => !prev)} />
        </div>
        {isScrolled && (
  <div className="h-px w-full bg-linear-to-r from-transparent via-[#d4c4a8] to-transparent" />
)}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </nav>
  </>
);
}