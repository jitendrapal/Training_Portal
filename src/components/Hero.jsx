import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  // Show popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600"></div>
      <div className="absolute inset-0 tech-pattern opacity-20"></div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Become a{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Job-Ready
              </span>{" "}
              Full Stack Developer
            </h1>

            <p className="mt-6 text-xl text-gray-200 max-w-2xl">
              Learn industry-relevant skills like Java, React, Node.js, and
              Python from expert trainers. Master the skills that tech companies
              want and launch your career in just 6 months.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                View Courses
              </Link>
              <Link
                to="/enroll"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 text-center"
              >
                Book Your Spot
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-300 text-sm">Students Placed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-300 text-sm">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Code snippet mockup */}
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400">App.jsx</div>
                </div>
                <div className="text-green-400">
                  <div className="text-blue-400">import</div> React{" "}
                  <div className="text-blue-400">from</div>{" "}
                  <div className="text-yellow-300">'react'</div>
                </div>
                <div className="mt-2 text-purple-400">
                  <div className="text-blue-400">function</div>{" "}
                  <div className="text-yellow-300">App</div>() {"{"}
                </div>
                <div className="ml-4 mt-1 text-gray-300">
                  <div className="text-blue-400">return</div> (
                </div>
                <div className="ml-8 text-green-400">
                  &lt;<div className="text-red-400">div</div>{" "}
                  <div className="text-blue-400">className</div>=
                  <div className="text-yellow-300">"app"</div>&gt;
                </div>
                <div className="ml-12 text-gray-300">
                  &lt;<div className="text-red-400">h1</div>&gt;Hello
                  World!&lt;/<div className="text-red-400">h1</div>&gt;
                </div>
                <div className="ml-8 text-green-400">
                  &lt;/<div className="text-red-400">div</div>&gt;
                </div>
                <div className="ml-4 text-gray-300">)</div>
                <div className="text-purple-400">{"}"}</div>
              </div>

              {/* Tech stack icons */}
              <div className="mt-6 flex justify-center space-x-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
                  N
                </div>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  P
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              React
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-300">
              Node.js
            </div>
            <div className="absolute top-1/2 -left-8 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce delay-700">
              Java
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

      {/* Urgency Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-bounce-in shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
            >
              ×
            </button>

            {/* Urgency Content */}
            <div className="text-center">
              {/* Fire Icon */}
              <div className="text-6xl mb-4 animate-pulse">🔥</div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                🚨 HURRY UP! SEATS ARE LIMITED
              </h3>

              <p className="text-gray-600 mb-4">
                Only{" "}
                <span className="font-bold text-red-600">5 seats left</span> in
                this batch!
              </p>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg p-4 mb-6">
                <div className="text-sm font-medium mb-1">
                  ⏰ OFFER EXPIRES IN:
                </div>
                <div className="text-3xl font-bold font-mono">
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* Benefits */}
              <div className="text-left mb-6 space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>25% Early Bird Discount</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Free Laptop + Course Materials</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>100% Job Placement Guarantee</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-green-500 mr-2">✅</span>
                  <span>Live 1-on-1 Mentorship</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to="/enroll"
                  onClick={() => setShowPopup(false)}
                  className="block w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
                >
                  🎯 SECURE MY SEAT NOW!
                </Link>

                <button
                  onClick={() => setShowPopup(false)}
                  className="block w-full text-gray-500 hover:text-gray-700 py-2 text-sm transition-colors"
                >
                  Maybe Later (Risk Losing Seat)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
