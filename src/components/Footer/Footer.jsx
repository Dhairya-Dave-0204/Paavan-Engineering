import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 mt-20 text-white bg-dark">
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-heading">Paavan Engineering</h3>
            <p className="text-sm leading-relaxed text-gray-300 font-body">
              Delivering precision-engineered solutions for over 30 years.
              Trusted for quality, durability, and performance in industrial
              manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm tracking-wide text-gray-400 uppercase font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 transition font-body hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 transition font-body hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-gray-300 transition font-body hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/infrastructure"
                  className="text-sm text-gray-300 transition font-body hover:text-primary"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 transition font-body hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products (UPDATED) */}
          <div>
            <h4 className="mb-4 text-sm tracking-wide text-gray-400 uppercase font-heading">
              Products
            </h4>
            <ul className="space-y-3 text-sm font-body">
              <li>
                <Link
                  to="/products/draw-bench-machine"
                  className="text-gray-300 transition hover:text-primary"
                >
                  Draw Bench Machine
                </Link>
              </li>

              <li>
                <Link
                  to="/products/straightening-machine"
                  className="text-gray-300 transition hover:text-primary"
                >
                  Straightening Machine
                </Link>
              </li>

              <li>
                <Link
                  to="/products/push-pointing-machine"
                  className="text-gray-300 transition hover:text-primary"
                >
                  Push Pointing Machine
                </Link>
              </li>

              <li>
                <Link
                  to="/products/industrial-chains"
                  className="text-gray-300 transition hover:text-primary"
                >
                  Industrial Chains
                </Link>
              </li>

              <li>
                <Link
                  to="/products/carbide-pellets"
                  className="text-gray-300 transition hover:text-primary"
                >
                  Carbide Pellets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (UPDATED LINKS) */}
          <div>
            <h4 className="mb-4 text-sm tracking-wide text-gray-400 uppercase font-heading">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-300 font-body">
              {/* Address → Google Maps */}
              <li className="flex items-start gap-3">
                <i className="text-xl ri-map-pin-line"></i>
                <a
                  href="https://maps.app.goo.gl/dVpq4dSSFUJiUqAY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-primary"
                >
                  NISARG INDUSTRIAL PARK, PLOT-04, behind
                  GIDC, CHITRA, Chitra GIDC, Bhavnagar, Gujarat
                </a>
              </li>

              {/* Phone → Dial */}
              <li className="flex items-center gap-3">
                <i className="text-xl ri-phone-line"></i>
                <a
                  href="tel:+918511326732"
                  className="transition hover:text-primary"
                >
                  +91 85113 26732
                </a>
              </li>

              {/* Email → Mail */}
              <li className="flex items-center gap-3">
                <i className="text-xl ri-mail-line"></i>
                <a
                  href="mailto:engineeringpaavan@gmail.com"
                  className="transition hover:text-primary"
                >
                  engineeringpaavan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400 font-body">
            © {new Date().getFullYear()} Paavan Engineering. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-gray-400 transition hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-sm text-gray-400 transition hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
