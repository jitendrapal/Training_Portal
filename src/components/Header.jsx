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
                    src="/neuro-edge-logo.png"
                    alt="Neuro Edge Technologies Logo"
                    className="w-10 h-10"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">
                    Neuro Edge Technologies
                  </h1>
                  <p className="text-xs text-gray-600">Training Institute</p>
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
                to="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/enroll"
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive("/enroll")
                    ? "text-primary-600 border-b-2 border-primary-600"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Enroll
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/enroll"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
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
                to="/enroll"
                onClick={closeMenu}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive("/enroll")
                    ? "text-primary-600 bg-primary-50"
                    : "text-gray-900 hover:text-primary-600"
                }`}
              >
                Enroll
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
