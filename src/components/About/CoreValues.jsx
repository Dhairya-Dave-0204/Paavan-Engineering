export default function CoreValues() {
  const values = [
    {
      title: "Innovation",
      desc: "Continuously improving our processes and adopting modern technologies to meet evolving industrial demands.",
      icon: "ri-lightbulb-flash-line",
    },
    {
      title: "Quality",
      desc: "Maintaining strict quality control at every stage to ensure durability, precision, and long-term performance.",
      icon: "ri-shield-check-line",
    },
    {
      title: "Customer Focus",
      desc: "Working closely with clients to deliver solutions tailored to their specific operational requirements.",
      icon: "ri-user-star-line",
    },
    {
      title: "Reliability",
      desc: "Delivering consistent performance and dependable products that industries can trust over time.",
      icon: "ri-checkbox-circle-line",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <p className="mb-2 text-sm tracking-wide font-body text-primary">
            Our Commitment
          </p>
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Driven by Principles That Define Our Work
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((item, index) => (
            <div key={index} className="group">

              {/* Icon */}
              <div className="mb-4 text-3xl transition-transform duration-300 text-primary group-hover:scale-110">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold font-heading text-dark">
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