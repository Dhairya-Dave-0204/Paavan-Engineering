import { Link } from "react-router-dom";
import { Warehouse } from "../../assets/assets"

export default function InfrastructureHero() {
  return (
    <section className="relative flex items-center min-h-screen pt-32 overflow-hidden lg:pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={Warehouse}
          alt="Manufacturing Facility"
          className="object-cover w-full h-full image-filter"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Subtle brand gradient */}
        <div className="absolute inset-0 bg3tone1 opacity-20"></div>
      </div>

      {/* Content */}
      <div className="w-full px-6 mx-auto max-w-7xl lg:px-10">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="mb-4 text-sm tracking-wide font-body text-primary">
            Our Infrastructure
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl font-heading">
            Built for Precision, Scale, and Reliability
          </h1>

          {/* Description */}
          <p className="max-w-xl mt-6 text-base leading-relaxed text-gray-200 sm:text-lg font-body">
            Our advanced manufacturing facility is equipped with modern
            machinery, skilled workforce, and rigorous quality processes to
            deliver consistent and high-performance industrial solutions.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-4 mt-8 sm:flex-row">
            <Link
              to="/contact#contact-form"
              className="px-6 py-3 text-sm tracking-wide text-white transition duration-500 bg-primary font-body hover:opacity-80"
            >
              Request a Quote
            </Link>

            <Link
              to="/products"
              className="px-6 py-3 text-sm tracking-wide text-white transition border border-white font-body hover:bg-white hover:text-dark"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
