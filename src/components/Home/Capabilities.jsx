export default function Capabilities() {
  const capabilities = [
    {
      title: "Bright Bar Machinery",
      icon: "ri-settings-3-line",
    },
    {
      title: "Industrial Chains",
      icon: "ri-links-line",
    },
    {
      title: "Carbide Pellets",
      icon: "ri-checkbox-multiple-blank-line",
    },
    {
      title: "Machined Components",
      icon: "ri-cpu-line",
    },
  ];

  return (
    <section className="border-t border-gray-200 py-14 lg:py-20 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 group"
            >
              {/* Icon */}
              <div className="text-3xl transition-transform duration-300 text-primary group-hover:scale-110">
                <i className={item.icon}></i>
              </div>

              {/* Title */}
              <h3 className="relative text-sm tracking-wide font-body md:text-base text-dark">
                {item.title}
                <span className="absolute left-0 w-0 h-px transition-all duration-300 -bottom-1 bg-primary group-hover:w-full"></span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
