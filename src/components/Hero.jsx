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
              Build Job-Ready Software Skills
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {" "}
                with Neuro Edge Technologies
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-200">
              Join our instructor-led courses designed to make you job-ready
              with real project experience, interview preparation, internship
              support, and placement guidance for a faster career launch.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Searching for IT Classes Near Me? Choose the Best IT Institute
              Near Wagholi for Full Stack, Python, AI, Cloud, Cyber Security,
              and Software Testing training.
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

          <div className="relative rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20 blur-3xl"></div>
            <p className="text-sm font-semibold uppercase text-primary-200 tracking-[0.3em] mb-6">
              Course Illustration
            </p>
            <div className="mb-4 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-4 text-white shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                Next batch starts soon
              </p>
              <p className="text-sm font-semibold">
                Limited seats available for the upcoming IT training batch.
              </p>
            </div>
            <div className="mb-6 rounded-2xl bg-white/10 border border-white/15 p-4 text-white shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-2 text-primary-200">
                Germany placement support
              </p>
              <p className="text-sm text-gray-200">
                Dedicated support for Ausbildung vocational pathways and our
                Europe Jobs Consultancy partnership.
              </p>
            </div>
            <ul className="space-y-5 relative">
              <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-xl">
                    💻
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary-200">
                      Course Module
                    </p>
                    <h3 className="font-semibold text-white">
                      Full Stack Web Development
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Build apps using React, Node.js, and cloud tools with hands-on
                  labs.
                </p>
              </li>
              <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-lg">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white text-xl">
                    🎯
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-primary-200">
                      Job Ready
                    </p>
                    <h3 className="font-semibold text-white">
                      Internship + Placement Support
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Get internship support and job-ready preparation with every
                  course.
                </p>
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
