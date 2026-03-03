import { Button } from "@/components/ui/button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: Props) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-[#F5EFE6] shadow-md  transform transition-all duration-400 ease-in-outoverflow-hidden ${
        isOpen
  ? "max-h-125 opacity-100 translate-y-0"
  : "max-h-0 opacity-0 -translate-y-2"
      }`}
    >
      <div className="flex flex-col px-6 py-8 space-y-6 font-serif text-lg">
        <a href="#explore" onClick={onClose} className="border-b pb-3">
          Explore
        </a>
        <a href="#story" onClick={onClose} className="border-b pb-3">
          Our Story
        </a>
        <a href="#artists" onClick={onClose} className="border-b pb-3">
          For Artists
        </a>
        <a href="#contact" onClick={onClose} className="border-b pb-3">
          Contact
        </a>

        <Button
          asChild
          variant="outline"
          className="mt-4 border-[#2C2C2C] text-[#2C2C2C]"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2TxYdHI8fUB6TJHKQFTc4FX1AXIklhbvOw17KJqc7qPaBLw/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            Join as Artist
          </a>
        </Button>
      </div>
    </div>
  );
}