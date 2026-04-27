import { Link } from "react-router-dom";
import { HeroBg } from "../../assets/assets";

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-screen overflow-hidden pt-28 lg:pt-36">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={HeroBg}
          alt="Industrial Machinery"
          className="object-cover w-full h-full image-filter"
        />

        {/* DARK BASE OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* SUBTLE INDUSTRIAL GRADIENT */}
        <div className="absolute inset-0 bg3tone1 opacity-30"></div>
      </div>

      {/* Content */}
      <div className="w-full px-6 mx-auto max-w-7xl lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline */}
          <p className="mb-4 text-sm tracking-wide font-body text-primary">
            30+ Years of Engineering Excellence
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white font-heading sm:text-5xl lg:text-6xl">
            Complete Solutions for Bright Bar Processing
          </h1>

          {/* Description */}
          <p className="max-w-xl mx-auto mt-6 text-base leading-relaxed text-gray-200 font-body sm:text-lg">
            Precision-engineered machinery, industrial chains, and carbide
            components designed for durability, performance, and long-term
            reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 text-sm tracking-wide text-center text-white transition duration-300 bg-primary font-body hover:opacity-90"
            >
              Request a Quote
            </Link>

            <a
              href="/Paavan_Catalog.pdf"
              download
              className="px-6 py-3 text-sm tracking-wide text-center text-white transition duration-300 border border-white font-body hover:bg-white hover:text-dark"
            >
              <i className="mr-2 ri-download-line"></i> Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
