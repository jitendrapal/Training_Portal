import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitToGoogleSheets, FORM_CONFIG } from "../config/googleSheets";

const WorkshopEnquiryForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Web Designing", // Default workshop topic
    message: "Shree Ramchandra Education Society", // Default college name
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});

  const workshopTopics = ["Web Designing"];

  const colleges = [
    "Shree Ramchandra Education Society",
    "Pune University",
    "MIT College of Engineering",
    "COEP Technological University",
    "VIT Pune",
    "Symbiosis Institute of Technology",
    "PICT Pune",
    "Other",
  ];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.course) {
      newErrors.course = "Please select a workshop topic";
    }

    if (!formData.message) {
      newErrors.message = "Please select your college";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Immediate UI feedback for better UX (same as enrollment form)
    setIsSubmitting(true);

    // Show success immediately for better perceived performance
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 500);

    try {
      // Submit to Google Sheets in background (non-blocking)
      submitToGoogleSheets(formData, FORM_CONFIG.FORM_TYPES.ENROLLMENT);

      // Auto-redirect after 3 seconds for better UX
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "Web Designing", // Default workshop topic
          message: "Shree Ramchandra Education Society",
        });
        setErrors({});
        navigate("/", { replace: true });
      }, FORM_CONFIG.SUCCESS_REDIRECT_DELAY);
    } catch (error) {
      console.error("Form submission error:", error);
      // Don't show alert for better UX, just log the error
    }
  };

  // Show success message (same as enrollment form)
  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Workshop Enquiry Submitted!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              We've received your workshop enquiry. Our team will contact you
              within 24 hours with workshop details and schedule.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">
                📞 Expect a call from +91-8055006652
              </p>
              <p className="text-green-700 text-sm mt-1">
                Meanwhile, check your email for workshop information and next
                steps.
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
      id="workshop-enquiry-form"
      className="py-8 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                🚀 Professional Training and Development Center
              </span>
              <h2 className="text-4xl font-bold mb-4">
                Master In-Demand Tech Skills
              </h2>
            </div>

            {/* Popular Course Highlight - Moved to Top */}
            <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-300/30">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    🔥 Most Popular This Month
                  </h4>
                  <p className="text-primary-100 text-sm">
                    Java Full Stack & Python Full Stack - High Demand!
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-indigo-200">
                    Starting Salary
                  </div>
                  <div className="text-xl font-bold">₹35K+</div>
                </div>
              </div>
            </div>

            {/* Our Courses */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">
                💼 Our Professional Courses:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Web Designing */}
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-300/30">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🎨</span>
                    <h4 className="font-semibold text-lg">Web Designing</h4>
                  </div>
                  <p className="text-primary-100 text-sm">
                    HTML5, CSS3, JavaScript, Bootstrap, Responsive Design
                  </p>
                </div>

                {/* Java Full Stack */}
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-300/30">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">☕</span>
                    <h4 className="font-semibold text-lg">Java Full Stack</h4>
                  </div>
                  <p className="text-primary-100 text-sm">
                    Core Java, Spring Boot, React, MySQL, REST APIs
                  </p>
                </div>

                {/* Python Full Stack */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-300/30">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🐍</span>
                    <h4 className="font-semibold text-lg">Python Full Stack</h4>
                  </div>
                  <p className="text-primary-100 text-sm">
                    Python, Django, React, PostgreSQL, Data Science
                  </p>
                </div>

                {/* AI & Machine Learning */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-300/30">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🤖</span>
                    <h4 className="font-semibold text-lg">AI & ML</h4>
                  </div>
                  <p className="text-primary-100 text-sm">
                    Machine Learning, Deep Learning, TensorFlow, PyTorch
                  </p>
                </div>

                {/* ChatGPT & AI Tools */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg p-4 border border-yellow-300/30">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">💬</span>
                    <h4 className="font-semibold text-lg">
                      ChatGPT & AI Tools
                    </h4>
                  </div>
                  <p className="text-primary-100 text-sm">
                    Prompt Engineering, AI Automation, Business Applications
                  </p>
                </div>

                {/* MERN Stack */}
                <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg p-4 border border-teal-300/30">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">⚛️</span>
                    <h4 className="font-semibold text-lg">MERN Stack</h4>
                  </div>
                  <p className="text-primary-100 text-sm">
                    MongoDB, Express.js, React, Node.js, Full Stack
                  </p>
                </div>
              </div>
            </div>

            {/* Training Benefits */}
            <div className="mt-8 p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-lg font-semibold mb-4">
                🎁 Exclusive Training Benefits:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Industry Expert Trainers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Live Project Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Job Placement Assistance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Industry Certification</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Lifetime Support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Flexible Batch Timings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Workshop Enquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your 10-digit mobile number"
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Workshop Topic Field */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Workshop Topic *
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.course ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                >
                  <option value="">Select workshop topic</option>
                  {workshopTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="mt-1 text-sm text-red-600">{errors.course}</p>
                )}
              </div>

              {/* College Name Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  College Name *
                </label>
                <select
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                >
                  {colleges.map((college) => (
                    <option key={college} value={college}>
                      {college}
                    </option>
                  ))}
                </select>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
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
                    "Submit Enquiry"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopEnquiryForm;
