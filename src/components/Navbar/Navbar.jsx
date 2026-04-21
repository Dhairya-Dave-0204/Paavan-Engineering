import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { PaavanLogo } from "../../assets/assets"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Contact", path: "/contact" },
  ];

  // Active + default link styles
  const navLinkClass = ({ isActive }) =>
    `font-body  tracking-wide transition-colors duration-500 ${
      isActive
        ? "text-primary font-medium"
        : "text-dark hover:text-primary"
    }`;

  return (
    <header
      className={`fixed top-5 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 mx-auto max-w-7xl lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src={PaavanLogo} // <-- Add logo path
              alt="Paavan Engineering"
              className="w-48 sm:w-56"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-10 lg:flex">
            {navLinks.map((link, index) => (
              <NavLink key={index} to={link.path} className={navLinkClass}>
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="px-5 py-2 text-white transition-all duration-500 font-body bg-primary hover:opacity-80"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mr-5 text-2xl sm:text-3xl lg:hidden text-dark"
            onClick={() => setIsOpen(true)}
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <span className="text-lg font-heading">Menu</span>  
          <button
            className="text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-6 px-6 py-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-body text-base transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-dark hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="px-5 py-3 mt-4 text-center text-white font-body bg-primary"
          >
            Get Quote
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}