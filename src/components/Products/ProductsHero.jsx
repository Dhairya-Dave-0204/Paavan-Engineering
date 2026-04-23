import { OpenComponent } from "../../assets/assets";

export default function ProductsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden text-center lg:pt-40 lg:pb-24">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={OpenComponent}
          alt="Industrial Products"
          className="object-cover w-full h-full"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Very subtle brand gradient */}
        <div className="absolute inset-0 bg3tone1 opacity-15"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl px-6 mx-auto lg:px-10">
        {/* Tag */}
        <p className="mb-4 text-sm tracking-wide font-body text-primary">
          Our Products
        </p>

        {/* Heading */}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white font-heading sm:text-5xl lg:text-6xl">
          Precision-Engineered Machinery & Components
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-base leading-relaxed text-gray-200 sm:text-lg font-body">
          Explore our complete range of industrial machinery, chains, carbide
          products, and precision-machined components designed for performance,
          durability, and efficiency.
        </p>

        {/* Hint */}
        <p className="mt-6 text-sm tracking-wide text-gray-300 font-body">
          Browse by category or search to find the right solution
        </p>
      </div>
    </section>
  );
}
