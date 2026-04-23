export default function InfrastructureOverview() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        <div className="max-w-3xl">
          {/* Heading */}
          <h2 className="text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
            Manufacturing Excellence Backed by Experience
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-relaxed font-body md:text-lg text-gray-custom">
            Our facility is equipped with advanced machinery and supported by a
            skilled workforce, enabling us to deliver precision-engineered
            solutions across a wide range of industrial applications. With a
            strong focus on quality and efficiency, we ensure consistent output
            that meets the highest standards.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <i className="mt-1 text-xl ri-settings-3-line text-primary"></i>
            <div>
              <h3 className="mb-1 text-lg font-heading text-dark">
                Advanced Machinery
              </h3>
              <p className="text-sm font-body text-gray-custom">
                Equipped with modern production equipment for high precision and
                efficiency.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <i className="mt-1 text-xl ri-team-line text-primary"></i>
            <div>
              <h3 className="mb-1 text-lg font-heading text-dark">
                Skilled Workforce
              </h3>
              <p className="text-sm font-body text-gray-custom">
                Experienced technicians and engineers ensuring consistent
                quality output.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <i className="mt-1 text-xl ri-shield-check-line text-primary"></i>
            <div>
              <h3 className="mb-1 text-lg font-heading text-dark">
                Quality Assurance
              </h3>
              <p className="text-sm font-body text-gray-custom">
                Strict quality control processes maintained at every stage of
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
