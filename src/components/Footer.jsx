import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Helper function to navigate to specific course
  const navigateToCourse = (courseId) => {
    navigate("/courses");
    // Wait for navigation to complete, then scroll to specific course
    setTimeout(() => {
      const courseElement = document.getElementById(`course-${courseId}`);
      if (courseElement) {
        courseElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => {
                      navigate("/");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/courses");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/services");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/internship");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Internship
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/about");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/enroll");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Enroll Now
                  </button>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigateToCourse(1)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Java Full Stack Developer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(2)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    React + Node Full Stack
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(3)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Python Full Stack Developer
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(4)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    .NET Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(5)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    C & C++ Programming
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(6)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    PHP Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(7)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI & Machine Learning
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(8)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    HTML, CSS & jQuery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToCourse(9)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Android / iOS Development
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary-400 mr-3 mt-1">📍</span>
                  <div>
                    <p className="text-gray-400">
                      Neuro Edge Technologies
                      <br />
                      4th Floor, Office No 401
                      <br />
                      Vishwaraj Pride,Opposite Zudio, Wagholi, Pune
                      <br />
                      Maharashtra Pune 412207
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">📞</span>
                  <div>
                    <p className="text-gray-400">+91-8055006652</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">✉️</span>
                  <div>
                    <p className="text-gray-400">
                      info@neuroedgetechnologies.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">🕒</span>
                  <div>
                    <p className="text-gray-400">
                      Mon - Sat: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Neuro Edge Technologies Training Institute. All
              rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 md:justify-end">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Refund Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
