export default function LocationSection() {
  return (
    <section className="py-20 lg:py-24 ">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: ADDRESS */}
          <div>
            <p className="mb-3 text-sm tracking-wide font-body text-primary">
              Our Location
            </p>

            <h2 className="mb-6 text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
              Visit Our Facility
            </h2>

            <p className="max-w-md mb-8 text-base leading-relaxed font-body text-gray-custom">
              Our manufacturing unit is located in Bhavnagar, Gujarat. You can
              visit us for discussions, inspections, or to understand our
              production capabilities.
            </p>

            <div className="flex items-start gap-4 text-sm font-body text-gray-custom">
              <i className="mt-1 text-lg ri-map-pin-line text-primary"></i>
              <p>
                Plot-04, Nisarg Industrial Estate, Nr. GIDC Chitra,
                <br />
                Bhavnagar – 364004, Gujarat, India
              </p>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div className="w-full h-87.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4197.661037703149!2d72.08474751133654!3d21.76006997999559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f51463eb73933%3A0xbda9f316983bd8b!2sPAAVAN%20ENGINEERING!5e1!3m2!1sen!2sin!4v1776866997456!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
