import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
                <div className="ml-3">
                  <h3 className="text-xl font-bold">TechAcademy</h3>
                  <p className="text-gray-400 text-sm">Training Institute</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming careers through industry-focused IT training. Join 500+ successful graduates working at top companies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-xl">📸</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-xl">💼</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('courses')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Courses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('enroll')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Enroll Now
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Java Full Stack Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    React + Node Full Stack
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Python Full Stack Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Data Science with Python
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    DevOps Engineering
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Mobile App Development
                  </a>
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
                      TechAcademy Training Institute<br />
                      3rd Floor, Tech Hub Building<br />
                      Baner, Pune - 411045<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">📞</span>
                  <div>
                    <p className="text-gray-400">+91-9876543210</p>
                    <p className="text-gray-400">+91-8765432109</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">✉️</span>
                  <div>
                    <p className="text-gray-400">info@techacademy.com</p>
                    <p className="text-gray-400">admissions@techacademy.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">🕒</span>
                  <div>
                    <p className="text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">
                Get the latest updates on new courses, industry trends, and career opportunities.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary-500 text-white"
              />
              <button className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} TechAcademy Training Institute. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 md:justify-end">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Certifications & Partnerships */}
        <div className="border-t border-gray-800 py-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">Certifications & Partnerships</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-60">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm">ISO 9001:2015</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🎓</div>
                <div className="text-sm">NASSCOM Partner</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💼</div>
                <div className="text-sm">Industry Certified</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🌟</div>
                <div className="text-sm">5-Star Rated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
