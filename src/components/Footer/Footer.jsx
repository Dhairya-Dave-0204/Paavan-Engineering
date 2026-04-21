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

            {/* Products */}
            <div>
              <h4 className="mb-4 text-sm tracking-wide text-gray-400 uppercase font-heading">
                Products
              </h4>
              <ul className="space-y-3 text-sm text-gray-300 font-body">
                <li>Bright Bar Machinery</li>
                <li>Industrial Chains</li>
                <li>WPS Dies</li>
                <li>Carbide Pellets</li>
                <li>Machined Components</li>
              </ul>
            </div>

            {/* Contact Info (Corrected) */}
            <div>
              <h4 className="mb-4 text-sm tracking-wide text-gray-400 uppercase font-heading">
                Contact
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-300 font-body">
                <li>
                  <i className="text-xl ri-map-pin-line"></i> Plot-04, Nisarg
                  Industrial Estate, Nr. GIDC Chitra, Bhavnagar, 364004
                </li>
                <li>
                  <i className="text-xl ri-phone-line"></i> +91 85113 26732
                </li>
                <li>
                  <i className="text-xl ri-mail-line"></i>{" "}
                  engineeringpaavan@gmail.com
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
