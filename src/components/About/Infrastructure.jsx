import { Machine9, Machine3, Machine2, Machine4 } from "../../assets/assets";

export default function Infrastructure() {
  const images = [
    {
      src: `${Machine9}`,
      alt: "Manufacturing Facility",
    },
    {
      src: `${Machine3}`,
      alt: "Industrial Machinery Setup",
    },
    {
      src: `${Machine2}`,
      alt: "Workshop Equipment",
    },
    {
      src: `${Machine4}`,
      alt: "Production Area",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="mb-2 text-sm tracking-wide font-body text-primary">
            Infrastructure
          </p>
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Equipped for Precision and Performance
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((item, index) => (
            <div key={index} className="overflow-hidden group">
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full transition duration-500 h-65 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Supporting Text */}
        <p className="max-w-2xl mt-10 text-base leading-relaxed font-body text-gray-custom">
          Our manufacturing facility is equipped with advanced machinery and
          modern tools that enable us to deliver precision-engineered products
          with consistency and efficiency. From raw material processing to final
          finishing, every stage is handled with strict quality control.
        </p>
      </div>
    </section>
  );
}
