import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Neuro Edge Technologies Logo"
                    className="w-10 h-10"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">
                    Neuro Edge Technologies
                  </h1>
                  <p className="text-xs text-gray-600">
                    Technology Training Institute
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/courses")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Courses
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/services")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Services
              </Link>
              <Link
                to="/internship"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/internship")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Internship
              </Link>

              <Link
                to="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Social Media Icons & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/61584675037354"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors p-1"
                title="Follow us on Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/neuroedgetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors p-1"
                title="Follow us on Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* <a
                href="https://linkedin.com/company/neuroedgetechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors p-1"
                title="Connect with us on LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              */}
            </div>

            {/* CTA Button */}
            <Link
              to="/enroll"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/courses")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Courses
              </Link>
              <Link
                to="/services"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/services")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Services
              </Link>
              <Link
                to="/internship"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/internship")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Internship
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/about")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/contact")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/enroll"
                onClick={closeMenu}
                className="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 text-base font-medium rounded-lg mt-4"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
