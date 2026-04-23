import { Link } from "react-router-dom";

export default function InfrastructureCTA() {
  return (
    <section className="py-20 text-center lg:py-24 bg-background">
      <div className="max-w-3xl px-6 mx-auto lg:px-10">
        {/* Heading */}
        <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
          Ready to Work with a Reliable Manufacturing Partner?
        </h2>

        {/* Description */}
        <p className="mt-4 font-body text-gray-custom">
          With advanced infrastructure, skilled expertise, and a commitment to
          quality, we are equipped to deliver solutions tailored to your
          requirements.
        </p>

        {/* CTA Button */}
        <Link
          to="/contact#contact-form"
          className="inline-block px-6 py-3 mt-8 text-sm tracking-wide text-white transition duration-500 bg-primary font-body hover:opacity-80"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
