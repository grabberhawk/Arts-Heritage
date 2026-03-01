import { useEffect, useState } from "react";
import StepCard from "@/components/ui/StepCard";
import { steps } from "@/data/steps";

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;

      setCurrent((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5EFE6] py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">

        <h2 className="font-serif text-2xl md:text-3xl text-[#2C2C2C] mb-4">
          How It Works
        </h2>

        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="h-px w-8 bg-[#C9B58C]"></div>
          <div className="w-1.5 h-1.5 bg-[#C9B58C] rounded-full"></div>
          <div className="h-px w-8 bg-[#C9B58C]"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <StepCard
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        {/* Mobile Fade Carousel */}
        <div className="relative md:hidden h-35 flex items-center justify-center">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
              active={index === current}
            />
          ))}
        </div>

      </div>
    </section>
  );
}