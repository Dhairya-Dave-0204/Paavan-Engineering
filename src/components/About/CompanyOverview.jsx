import { Warehouse } from "../../assets/assets"

export default function CompanyOverview() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            {/* Tag */}
            <p className="mb-3 text-sm tracking-wide font-body text-primary">
              Company Overview
            </p>

            {/* Heading */}
            <h2 className="text-3xl font-semibold leading-tight tracking-tight font-heading md:text-4xl text-dark">
              Trusted Manufacturing Partner for Precision-Engineered Solutions
            </h2>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed font-body text-gray-custom">
              With over three decades of experience, Paavan Engineering has established
              itself as a reliable name in the manufacturing of industrial machinery
              and components. We specialize in delivering high-performance solutions
              for bright bar processing, industrial chains, carbide pellets, and
              precision-machined components.
            </p>

            <p className="mt-4 text-base leading-relaxed font-body text-gray-custom">
              Our approach combines traditional craftsmanship with modern manufacturing
              technology, ensuring that every product meets the highest standards of
              durability, efficiency, and precision. We work closely with our clients
              to deliver solutions that are tailored to their operational requirements.
            </p>

            {/* Key Highlights */}
            <div className="grid gap-6 mt-8 sm:grid-cols-2">

              <div>
                <h3 className="text-xl font-semibold font-heading text-dark">
                  30+
                </h3>
                <p className="mt-1 text-sm font-body text-gray-custom">
                  Years of Experience
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-heading text-dark">
                  100+
                </h3>
                <p className="mt-1 text-sm font-body text-gray-custom">
                  Industrial Clients Served
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-heading text-dark">
                  High
                </h3>
                <p className="mt-1 text-sm font-body text-gray-custom">
                  Precision Manufacturing
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold font-heading text-dark">
                  End-to-End
                </h3>
                <p className="mt-1 text-sm font-body text-gray-custom">
                  Custom Solutions
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <img
              src={Warehouse}
              alt="Manufacturing Facility"
              className="object-cover w-full h-105"
            />

            {/* Subtle divider line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg2tone4"></div>

          </div>

        </div>

      </div>
    </section>
  );
}