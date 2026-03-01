type StepProps = {
  number: string;
  title: string;
  description: string;
  active?: boolean;
};

export default function StepCard({
  number,
  title,
  description,
  active = true,
}: StepProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center space-y-2
        transition-opacity duration-700
        md:relative md:opacity-100
        ${active ? "opacity-100" : "opacity-0"}
        absolute md:static inset-0
      `}
    >
      <div className="text-xs tracking-[0.3em] text-[#7A6F5A]">
        {number}
      </div>

      <h3 className="font-serif text-lg text-[#2C2C2C]">
        {title}
      </h3>

      <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-55 text-center">
        {description}
      </p>
    </div>
  );
}