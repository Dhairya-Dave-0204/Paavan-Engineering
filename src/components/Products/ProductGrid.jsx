import { useState } from "react";
import { Link } from "react-router-dom";
import { productData } from "../../pages/ProductDetail/productData";

export default function ProductGrid() {
  const categories = ["All", "Machinery", "Chains", "Carbide", "Components"];

  const [activeCategory, setActiveCategory] = useState("All");

  // Convert object → array
  const products = Object.entries(productData).map(([slug, product]) => ({
    slug,
    ...product,
  }));

  // Filter logic
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
              className={`px-4 py-2 text-sm font-body transition ${
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
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
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
