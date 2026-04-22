export default function ContactFormSection() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50/60">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight font-heading md:text-4xl text-dark">
              Get in Touch
            </h2>

            <p className="max-w-md mb-8 text-base leading-relaxed font-body text-gray-custom">
              Reach out to us for inquiries, product details, or custom
              manufacturing solutions. Our team will respond promptly.
            </p>

            <div className="space-y-6 text-sm font-body text-gray-custom">
              <div className="flex items-start gap-4">
                <i className="mt-1 text-lg ri-map-pin-line text-primary"></i>
                <p>
                  Plot-04, Nisarg Industrial Estate, Nr. GIDC Chitra, Bhavnagar
                  - 364004, Gujarat, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <i className="text-lg ri-phone-line text-primary"></i>
                <p>+91 85113 26732</p>
              </div>

              <div className="flex items-center gap-4">
                <i className="text-lg ri-mail-line text-primary"></i>
                <p>engineeringpaavan@gmail.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-body text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-primary font-body"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-body text-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-primary font-body"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm font-body text-dark">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 focus:outline-none focus:border-primary font-body"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-sm font-body text-dark">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 text-sm border border-gray-300 resize-none focus:outline-none focus:border-primary font-body"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="px-6 py-3 text-sm tracking-wide text-white transition duration-500 cursor-pointer bg-primary font-body hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
