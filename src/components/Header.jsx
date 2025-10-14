import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">TechAcademy</h1>
                  <p className="text-xs text-gray-600">Training Institute</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('enroll')}
                className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Enroll
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('enroll')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('enroll')}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Enroll
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('enroll')}
                className="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg mt-4"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
