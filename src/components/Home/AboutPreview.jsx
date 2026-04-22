import { Link } from "react-router-dom";
import { Warehouse } from "../../assets/assets";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            <p className="mb-3 text-sm tracking-wide font-body text-primary">
              About Us
            </p>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-tight tracking-tight font-heading md:text-4xl text-dark">
              Engineering Excellence Backed by 30+ Years of Experience
            </h2>

            {/* Description */}
            <p className="max-w-xl mt-6 text-base leading-relaxed font-body text-gray-custom">
              At Paavan Engineering, we specialize in manufacturing precision-engineered
              machinery and industrial components designed for durability, efficiency,
              and long-term performance. Our expertise spans bright bar processing
              solutions, chains, carbide pellets, and machined components.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <i className="mt-1 text-lg ri-check-line text-primary"></i>
                <p className="text-sm font-body text-dark">
                  30+ years of industry expertise
                </p>
              </div>

              <div className="flex items-start gap-3">
                <i className="mt-1 text-lg ri-check-line text-primary"></i>
                <p className="text-sm font-body text-dark">
                  Custom-built industrial solutions
                </p>
              </div>

              <div className="flex items-start gap-3">
                <i className="mt-1 text-lg ri-check-line text-primary"></i>
                <p className="text-sm font-body text-dark">
                  High-performance and durable machinery
                </p>
              </div>

              <div className="flex items-start gap-3">
                <i className="mt-1 text-lg ri-check-line text-primary"></i>
                <p className="text-sm font-body text-dark">
                  Strong after-sales support
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block px-6 py-3 text-sm text-white transition duration-300 font-body bg-primary hover:opacity-90"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src={Warehouse} 
              alt="Paavan Engineering Facility"
              className="object-cover w-full h-100"
            />

            {/* Subtle overlay line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg2tone4"></div>

          </div>

        </div>

      </div>
    </section>
  );
}