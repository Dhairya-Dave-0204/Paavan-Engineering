export default function ProcessSection() {
  const steps = [
    {
      title: "Requirement Analysis",
      description:
        "Understanding client needs, specifications, and project requirements in detail.",
    },
    {
      title: "Design & Planning",
      description:
        "Planning the manufacturing process with precision and efficiency in mind.",
    },
    {
      title: "Manufacturing",
      description:
        "Executing production using advanced machinery and skilled workforce.",
    },
    {
      title: "Quality Inspection",
      description:
        "Strict quality checks at every stage to ensure reliability and performance.",
    },
    {
      title: "Delivery",
      description:
        "Timely delivery of products meeting all required specifications.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Our Process
          </h2>

          <p className="mt-4 font-body text-gray-custom">
            A structured and efficient workflow ensures consistency, quality,
            and reliability across every project we undertake.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="mb-4">
                <span className="text-lg text-primary font-heading">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-heading text-dark">
                {step.title}
              </h3>

              <p className="text-sm font-body text-gray-custom">
                {step.description}
              </p>

              {/* Connector Line (desktop only) */}
              {index !== steps.length - 1 && (
                <div className="absolute hidden w-10 bg-gray-300 md:block top-3 -right-5 h-1px"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
