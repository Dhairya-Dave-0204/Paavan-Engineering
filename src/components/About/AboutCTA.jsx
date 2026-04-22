import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="py-20 overflow-hidden lg:py-24">


      <div className="max-w-4xl px-6 mx-auto text-center lg:px-10">

        {/* Heading */}
        <h2 className="text-3xl font-semibold leading-tight tracking-tight font-heading md:text-4xl">
          Partner with a Team You Can Rely On
        </h2>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed font-body md:text-lg">
          With decades of experience and a commitment to precision engineering,
          Paavan Engineering is ready to deliver solutions tailored to your
          industrial requirements.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-sm tracking-wide text-white transition duration-500 bg-primary font-body hover:opacity-80"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}