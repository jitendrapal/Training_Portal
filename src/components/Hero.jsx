import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-900 via-primary-800 to-secondary-700"></div>
      <div className="absolute inset-0 tech-pattern opacity-20"></div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex items-center justify-center min-h-[70vh]">
          {/* Main Content - Full Width */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Powering Businesses{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Through-Innovation
              </span>{" "}
              with
              <p>Neuro Edge Technologies</p>
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              We at Neuro Edge Technologies are a startup software development
              company focused on delivering innovative, scalable, and
              cost-effective digital solutions. Our team specializes in building
              custom applications, web platforms, and enterprise software
              tailored to client needs. Along with development services, we
              provide live project internship opportunities in modern software
              technologies to bridge the gap between industry and talent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                View Services
              </Link>
              <Link
                to="/enroll"
                className="bg-transparent border-2 border-secondary-400 text-secondary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-400 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Your Spot
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
