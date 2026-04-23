export default function ProductCategories({ setActiveCategory }) {
  const categories = [
    {
      name: "Machinery",
      icon: "ri-settings-3-line",
    },
    {
      name: "Chains",
      icon: "ri-links-line",
    },
    {
      name: "Carbide",
      icon: "ri-cpu-line",
    },
    {
      name: "Components",
      icon: "ri-box-3-line",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">

        {/* INTRO */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl font-semibold tracking-tight font-heading md:text-3xl text-dark">
            Explore Our Product Range
          </h2>

          <p className="mt-4 text-base leading-relaxed font-body text-gray-custom">
            Our offerings include precision-engineered machinery, industrial chains,
            carbide components, and machined parts designed to meet the demands of
            modern manufacturing environments.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">

          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat.name)}
              className="flex flex-col items-center justify-center py-8 transition border border-gray-200 group hover:border-primary"
            >

              {/* Icon */}
              <div className="mb-3 text-2xl text-primary">
                <i className={cat.icon}></i>
              </div>

              {/* Label */}
              <p className="text-sm transition font-body text-dark group-hover:text-primary">
                {cat.name}
              </p>

            </button>
          ))}

        </div>

      </div>
    </section>
  );
}