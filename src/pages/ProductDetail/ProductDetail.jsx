import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { productData } from "./productData";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productData[slug];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Fallback
  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-heading text-dark">Product not found</h2>
        <Link
          to="/products"
          className="inline-block mt-6 text-primary font-body"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* ================= HEADER ================= */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="px-6 mx-auto max-w-7xl lg:px-10">
          <p className="mb-3 text-sm tracking-wide font-body text-primary">
            {product.category}
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight font-heading sm:text-5xl text-dark">
            {product.title}
          </h1>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="pb-20 lg:pb-24">
        <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:px-10 lg:grid-cols-2">
          {/* Image */}
          <div className="w-full h-87.5 sm:h-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Description */}
          <div>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight font-heading md:text-3xl text-dark">
              Overview
            </h2>

            <p className="text-base leading-relaxed font-body md:text-lg text-gray-custom">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="px-6 mx-auto max-w-7xl lg:px-10">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight font-heading md:text-3xl text-dark">
            Key Features
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="p-5 text-sm transition-all duration-300 border border-gray-200 font-body text-gray-custom hover:border-primary hover:-translate-y-1 hover:shadow-sm"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="px-6 mx-auto max-w-7xl lg:px-10">
          <h2 className="mb-10 text-2xl font-semibold tracking-tight font-heading md:text-3xl text-dark">
            Applications
          </h2>

          <ul className="space-y-4 text-base font-body text-gray-custom">
            {product.applications.map((app, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-primary"></span>
                {app}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center lg:py-24 bg-background">
        <div className="max-w-3xl px-6 mx-auto lg:px-10">
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Looking for this product?
          </h2>

          <p className="mt-4 font-body text-gray-custom">
            Get in touch with us for detailed specifications, pricing, and
            custom solutions tailored to your requirements.
          </p>

          <Link
            to="/contact#contact-form"
            className="inline-block px-6 py-3 mt-8 text-sm tracking-wide text-white transition duration-500 bg-primary font-body hover:opacity-80"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
