type Artwork = {
  title: string;
  artist: string;
  price: number;
  image: string;
};

export default function ArtworkCard({
  title,
  artist,
  price,
  image,
}: Artwork) {
  return (
  <div className="group text-center min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center">

      <div className="relative inline-block">
        <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#E8DFD1]"></div>

        <div className="relative border-2 border-[#C9B58C] bg-white p-3 shadow-[0_25px_50px_rgba(0,0,0,0.08)]">
          <div className="border border-[#E5DED0] p-2 bg-[#FAF7F2] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-70 md:w-75 aspect-4/5 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <h3 className="font-serif text-2xl text-[#2C2C2C]">
          {title}
        </h3>

        <p className="text-sm tracking-[0.15em] text-[#7A6F5A] uppercase">
          {artist}
        </p>

        <p className="text-base text-[#2C2C2C] mt-3">
          ₹ {price.toLocaleString()}
        </p>
      </div>

    </div>
  );
}