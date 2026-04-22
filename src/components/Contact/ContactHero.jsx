export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 text-center lg:pt-40 lg:pb-24 bg-background">
      <div className="max-w-4xl px-6 mx-auto lg:px-10">
        <p className="mb-4 text-sm tracking-wide font-body text-primary">
          Contact Us
        </p>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight font-heading sm:text-5xl lg:text-6xl text-dark">
          Let's Build Something Reliable Together
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-base leading-relaxed sm:text-lg font-body text-gray-custom">
          Whether you need precision-engineered machinery or custom industrial
          solutions, our team is ready to assist you with expertise built over
          decades.
        </p>

        <p className="mt-6 text-sm tracking-wide text-gray-400 font-body">
          Fill out the form below and we'll get back to you
        </p>
      </div>

      <hr className="mx-auto mt-20 text-gray-200 max-w-7xl" />
    </section>
  );
}
