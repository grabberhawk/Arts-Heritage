import { useEffect, useState } from "react";

const images = [
  "photo_2026-03-03_04-07-18_vw3tjs",
  "photo_2026-03-03_04-07-13_nu3miz",
  "photo_2026-03-03_04-06-56_jvxfgc",
];

const getImage = (publicId:any) =>
  `https://res.cloudinary.com/daojhzll2/image/upload/w_800,f_auto,q_auto,c_fill,g_auto/${publicId}.jpg`;

export default function EmpowerArtwork() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-85">
      {/* Soft depth layer */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#1C1C1C]"></div>

      {/* Main framed card */}
      <div className="relative border border-[#C9B58C] bg-[#1F1F1F] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
        <div className="relative aspect-4/5 overflow-hidden bg-black">
          {images.map((id, index) => (
            <img
              key={index}
              src={getImage(id)}
              alt="Parapara Artisan Artwork"
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1800 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}