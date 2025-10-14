import React, { useState, useEffect, useCallback } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const courses = [
    "Java Full Stack Developer",
    "React + Node Full Stack Developer",
    "Python Full Stack Developer",
  ];

  // Optimized form change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Fast scroll to home with immediate feedback
  const scrollToHome = useCallback(() => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Show form with fast animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Immediate UI feedback for better UX
      setIsSubmitting(true);

      // Show success immediately for better perceived performance
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 500);

      try {
        // Submit to Google Sheets in background (non-blocking)
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("course", formData.course);
        formDataToSend.append("message", formData.message);
        formDataToSend.append("timestamp", new Date().toLocaleString());
        formDataToSend.append("source", "TechAcademy Website");

        const scriptUrl =
          "https://script.google.com/macros/s/AKfycbwxep43XiPvMEc2Ihz7dMRhbgsCWLaZnGXShv_cvmLMEN2W1pfZtvhxrCqEtwt4bjJO/exec";

        // Submit in background without blocking UI
        fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          body: formDataToSend,
        }).catch((error) => {
          console.log("Background submission error:", error);
        });

        // Auto-redirect after 3 seconds for better UX
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            message: "",
          });
          scrollToHome();
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Still show success for better UX
      }
    },
    [formData, scrollToHome]
  );

  if (isSubmitted) {
    return (
      <section
        id="enroll"
        className="py-20 bg-gradient-to-r from-green-600 to-green-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your enrollment request. Our career counselor will
              contact you within 24 hours to discuss your learning journey.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">
                📞 Expect a call from +91-9876543210
              </p>
              <p className="text-green-700 text-sm mt-1">
                Meanwhile, check your email for course details and next steps.
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              Redirecting to home page in a few seconds...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="enroll"
      className="py-20 bg-gradient-to-r from-primary-600 to-primary-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`text-white transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Tech Career?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Take the first step towards becoming a job-ready developer. Fill
              out the form and get a free career counseling session with our
              experts.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold">Free Career Counseling</h3>
                  <p className="text-primary-100 text-sm">
                    Get personalized guidance on your learning path
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold">Course Recommendation</h3>
                  <p className="text-primary-100 text-sm">
                    Find the perfect course based on your goals
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-semibold">Special Offers</h3>
                  <p className="text-primary-100 text-sm">
                    Get exclusive discounts and payment plans
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-semibold">Quick Response</h3>
                  <p className="text-primary-100 text-sm">
                    We'll contact you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h4 className="font-semibold mb-2">🔥 Limited Time Offer</h4>
              <p className="text-primary-100 text-sm">
                Enroll this month and get <strong>20% off</strong> on all
                courses + Free placement support worth ₹10,000
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Course *
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300 resize-none"
                  placeholder="Tell us about your background and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get Free Counseling Session"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our Terms of Service and
                Privacy Policy. We'll only use your information to contact you
                about our courses.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;
