import { Link } from "react-router-dom";
import {
  DrawBench,
  Pointing,
  Polishing,
  Straightening,
  Conveyer,
  Chain,
  CNC,
  Gearbox,
} from "../../assets/assets";

export default function ProductShowcase() {
  const products = [
    {
      title: "Draw Bench Machine",
      image: `${DrawBench}`,
      desc: "Heavy-duty machine for bar drawing operations with high precision.",
    },
    {
      title: "Pointing Machine",
      image: `${Pointing}`,
      desc: "Efficient solution for reducing bar end diameter for processing.",
    },
    {
      title: "Polishing Machine",
      image: `${Polishing}`,
      desc: "Uniform surface finishing for small to heavy bars.",
    },
    {
      title: "Straightening Machine",
      image: `${Straightening}`,
      desc: "Ensures accurate alignment and dimensional consistency.",
    },
    {
      title: "Conveyor Stand",
      image: `${Conveyer}`,
      desc: "Smooth material handling across production stages.",
    },
    {
      title: "Industrial Chain",
      image: `${Chain}`,
      desc: "High-load chains designed for durability and reliability.",
    },
    {
      title: "CNC Components",
      image: `${CNC}`,
      desc: "Precision-machined components to exact specifications.",
    },
    {
      title: "Industrial Gearbox",
      image: `${Gearbox}`,
      desc: "Reliable power transmission for demanding operations.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-body text-primary tracking-wide mb-2">
            Our Products
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark tracking-tight">
            Precision-Engineered Industrial Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link to="/products" key={index} className="group block">
              <div className="overflow-hidden">
                {/* Image */}
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105 image-filter"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="font-body text-base text-dark group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="text-sm text-gray-custom mt-2 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            to="/products"
            className="inline-block px-6 py-3 text-sm font-body bg-primary text-white transition duration-500 hover:opacity-80"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
