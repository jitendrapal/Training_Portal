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
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-indigo-900 to-violet-900"></div>
      <div className="absolute inset-0 tech-pattern opacity-20"></div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr] items-center min-h-[70vh]">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build Career-Ready Software Skills
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                with Neuro Edge Training
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              Join our instructor-led courses designed for beginners and working
              professionals. Get hands-on experience building real projects,
              receive internship placements, mentorship from industry experts,
              and placement support to launch your software career.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                View Courses
              </Link>
              <Link
                to="/enroll"
                className="bg-transparent border-2 border-secondary-400 text-secondary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary-400 hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase text-primary-200 tracking-[0.3em] mb-6">
              Learning Benefits
            </p>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white text-lg">
                  🎓
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Live Project Learning
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Build real applications with guided mentorship and practical
                    labs.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white text-lg">
                  💼
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Internship Placement
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Gain industry experience with internship opportunities after
                    course completion.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white text-lg">
                  🚀
                </span>
                <div>
                  <h3 className="font-semibold text-white">
                    Placement Support
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Get career guidance, resume help, and interview preparation.
                  </p>
                </div>
              </li>
            </ul>
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
