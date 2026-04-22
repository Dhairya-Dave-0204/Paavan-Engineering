import { Link } from "react-router-dom";
import { Sprocket, Coils1, Coils2 }  from "../../assets/assets";

export default function KeyProducts() {
  const products = [
    {
      title: "Industrial Sprockets",
      desc: "High-strength sprockets engineered for durability and precision in heavy-duty industrial applications.",
      image: `${Sprocket}`,
    },
    {
      title: "Carbide Pellets",
      desc: "Wear-resistant carbide pellets designed for long-lasting performance in demanding manufacturing environments.",
      image: `${Coils2}`,
    },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-body text-primary tracking-wide mb-2">
            Key Products
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark tracking-tight">
            Built for Performance and Reliability
          </h2>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {products.map((product, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-6">

                <h3 className="font-heading text-xl font-semibold text-dark group-hover:text-primary transition-colors">
                  {product.title}
                </h3>

                <p className="mt-3 text-base font-body text-gray-custom leading-relaxed max-w-md">
                  {product.desc}
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-4 text-sm font-body text-primary tracking-wide"
                >
                  Learn More →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}