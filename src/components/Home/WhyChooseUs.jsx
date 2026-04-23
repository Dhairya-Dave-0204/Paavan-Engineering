export default function WhyChooseUs() {
  const points = [
    {
      title: "30+ Years of Experience",
      desc: "Decades of expertise in manufacturing precision-engineered industrial machinery and components.",
      icon: "ri-award-line",
    },
    {
      title: "Custom Manufacturing",
      desc: "Tailored solutions designed to meet specific industrial requirements and operational needs.",
      icon: "ri-tools-line",
    },
    {
      title: "Advanced Technology",
      desc: "Equipped with modern machinery and processes to ensure precision, efficiency, and consistency.",
      icon: "ri-settings-3-line",
    },
    {
      title: "Reliable Support",
      desc: "Dedicated customer support and after-sales service to ensure long-term performance and trust.",
      icon: "ri-customer-service-2-line",
    },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="mb-2 text-sm tracking-wide font-body text-primary">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Built on Experience, Driven by Precision
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-300 border border-gray-200 group hover:border-primary hover:-translate-y-1 hover:shadow-sm"
            >
              {/* Icon */}
              <div className="mb-4 text-3xl transition-transform duration-300 text-primary group-hover:scale-110">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 font-heading text-dark group-hover:text-primary">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed font-body text-gray-custom">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
