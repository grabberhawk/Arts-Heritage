type Props = {
  onClick: () => void;
};

export default function MobileMenuButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="md:hidden flex items-center justify-center p-2"
      aria-label="Toggle Menu"
    >
     <div className="space-y-1.25">
  <span className="block h-[1.5px] w-6 bg-[#2C2C2C] transition-all"></span>
  <span className="block h-[1.5px] w-6 bg-[#2C2C2C] transition-all"></span>
  <span className="block h-[1.5px] w-6 bg-[#2C2C2C] transition-all"></span>
</div>
    </button>
  );
}