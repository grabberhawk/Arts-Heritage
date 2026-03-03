import { useRef, useState } from "react";
import ArtworkCard from "@/components/ui/ArtworkCard";
import { artworks } from "@/data/artwork";

export default function Featured() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 5;

  const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const scrollToPage = (page: number) => {
    if (!scrollRef.current) return;

    const containerWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: containerWidth * page,
      behavior: "smooth",
    });

    setCurrentPage(page);
  };

  return (
    <section id="featured-artworks" className="bg-[#F5EFE6] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-[#2C2C2C]">
            Featured Artworks
          </h2>
        </div>

        {/* MOBILE (unchanged) */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 md:hidden no-scrollbar">
          {artworks.map((art) => (
            <ArtworkCard key={art.id} {...art} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid grid-cols-5 gap-10 min-w-full snap-start"
              >
                {artworks
                  .slice(
                    pageIndex * ITEMS_PER_PAGE,
                    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
                  )
                  .map((art) => (
                    <ArtworkCard key={art.id} {...art} />
                  ))}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <button
              onClick={() =>
                scrollToPage(Math.max(currentPage - 1, 0))
              }
              disabled={currentPage === 0}
              className="text-[#7A6F5A] hover:text-[#2C2C2C] disabled:opacity-30"
            >
              ‹
            </button>

            <span className="font-serif text-[#2C2C2C] tracking-wide">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={() =>
                scrollToPage(
                  Math.min(currentPage + 1, totalPages - 1)
                )
              }
              disabled={currentPage === totalPages - 1}
              className="text-[#7A6F5A] hover:text-[#2C2C2C] disabled:opacity-30"
            >
              ›
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}