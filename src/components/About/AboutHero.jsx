import { Sparks } from "../../assets/assets"

export default function AboutHero() {
  return (
    <section className="relative flex items-center pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">

        {/* Background Image */}
        <img
          src={Sparks}
          alt="Paavan Engineering Facility"
          className="w-full h-full object-cover image-filter"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg3tone1 opacity-20"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-3xl">

          {/* Tag */}
          <p className="text-sm font-body text-primary tracking-wide mb-4">
            About Us
          </p>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
            Building Precision Engineering Solutions for Over 30 Years
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg font-body text-gray-200 leading-relaxed max-w-xl">
            Paavan Engineering has been at the forefront of manufacturing
            high-performance industrial machinery and components, delivering
            reliability, precision, and long-term value to industries across sectors.
          </p>

        </div>

      </div>

    </section>
  );
}