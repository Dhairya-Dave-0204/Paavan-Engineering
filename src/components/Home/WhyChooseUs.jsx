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
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-body text-primary tracking-wide mb-2">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark tracking-tight">
            Built on Experience, Driven by Precision
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {points.map((item, index) => (
            <div key={index} className="group">

              {/* Icon */}
              <div className="text-3xl text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-body text-gray-custom leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}