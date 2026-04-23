import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DrawBench,
  Pointing,
  Polishing,
  Straightening,
  Conveyer,
  Chain,
  Coils1,
  CNC,
  Gearbox,
} from "../../assets/assets";

export default function ProductGrid() {
  const categories = ["All", "Machinery", "Chains", "Carbide", "Components"];

  const products = [
    {
      title: "Draw Bench Machine",
      category: "Machinery",
      image: `${DrawBench}`,
      slug: "draw-bench-machine",
    },
    {
      title: "Pointing Machine",
      category: "Machinery",
      image: `${Pointing}`,
      slug: "pointing-machine",
    },
    {
      title: "Polishing Machine",
      category: "Machinery",
      image: `${Polishing}`,
      slug: "polishing-machine",
    },
    {
      title: "Straightening Machine",
      category: "Machinery",
      image: `${Straightening}`,
      slug: "straightening-machine",
    },
    {
      title: "Conveyor Stand",
      category: "Machinery",
      image: `${Conveyer}`,
      slug: "conveyor-stand",
    },
    {
      title: "Industrial Chain",
      category: "Chains",
      image: `${Chain}`,
      slug: "industrial-chain",
    },
    {
      title: "Carbide Pellets",
      category: "Carbide",
      image: `${Coils1}`,
      slug: "carbide-pellets",
    },
    {
      title: "CNC Components",
      category: "Components",
      image: `${CNC}`,
      slug: "cnc-components",
    },
    {
      title: "Industrial Gearbox",
      category: "Components",
      image: `${Gearbox}`,
      slug: "industrial-gearbox",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-body cursor-pointer transition ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "border border-gray-300 text-dark hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Link
              key={index}
              to={`/products/${product.slug}`}
              className="block group"
            >
              <div className="overflow-hidden">
                {/* Image */}
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-base transition font-body text-dark group-hover:text-primary">
                    {product.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
