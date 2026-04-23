import {
  Machine1,
  Machine2,
  Machine3,
  Machine4,
  Machine5,
  Machine6,
} from "../../assets/assets";

export default function MachineryShowcase() {
  const machines = [
    {
      title: "Draw Bench Setup",
      image: `${Machine1}`,
    },
    {
      title: "Straightening Machine",
      image: `${Machine2}`,
    },
    {
      title: "CNC / VMC Machines",
      image: `${Machine3}`,
    },
    {
      title: "Polishing Machine",
      image: `${Machine4}`,
    },
    {
      title: "Pointing Machine",
      image: `${Machine5}`,
    },
    {
      title: "Material Handling Systems",
      image: `${Machine6}`,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Advanced Machinery & Equipment
          </h2>

          <p className="mt-4 font-body text-gray-custom">
            Our facility is equipped with modern machinery and production
            systems that enable precision manufacturing and efficient operations
            across all stages of production.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden">
                {/* Image */}
                <div className="w-full overflow-hidden h-60">
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <div className="mt-4">
                  <h3 className="text-base transition font-body text-dark group-hover:text-primary">
                    {machine.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
