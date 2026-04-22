import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 bg-dark text-white relative overflow-hidden">

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg3tone1 opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">

        {/* Heading */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Looking for Reliable Industrial Solutions?
        </h2>

        {/* Description */}
        <p className="mt-4 font-body text-gray-300 text-base md:text-lg leading-relaxed">
          Partner with Paavan Engineering for precision-engineered machinery,
          durable components, and solutions tailored to your industrial needs.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-white font-body text-sm tracking-wide transition duration-500 hover:opacity-85"
          >
            Request a Quote
          </Link>
        </div>

      </div>
    </section>
  );
}