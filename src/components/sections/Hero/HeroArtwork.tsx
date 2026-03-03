import { useEffect, useState } from "react";

const images = [
  "Screenshot_2026-03-03_040936_yhlapb",
  "Screenshot_2026-03-03_041032_mjlduj",
  "Screenshot_2026-03-03_041213_uvkjgh",
  "Screenshot_2026-03-03_041514_qdc4eg"
];

const getImage = (publicId : any) =>
  `https://res.cloudinary.com/daojhzll2/image/upload/w_1600,f_auto,q_auto,c_fill,g_auto/${publicId}.jpg`;

export default function HeroArtwork() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); // slower = premium feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-200">

      {/* Depth layer */}
      <div className="absolute inset-0 translate-x-6 translate-y-6 bg-[#E8DFD1]"></div>

      <div className="relative border-4 border-[#C9B58C] bg-white p-4 shadow-[0_50px_100px_rgba(0,0,0,0.18)]">

        <div className="relative aspect-4/3 overflow-hidden bg-[#FAF7F2]">

          {images.map((id, index) => (
            <img
              key={index}
              src={getImage(id)}
              alt="Parapara Traditional Artwork"
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-[2000ms] ease-in-out
                transition-transform duration-[8000ms] ease-out
                ${index === current
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-100"}
              `}
            />
          ))}

          {/* Soft cinematic overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>

        </div>
      </div>
    </div>
  );
}