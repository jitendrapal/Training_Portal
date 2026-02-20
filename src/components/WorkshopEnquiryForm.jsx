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
      className="py-16 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Web Designing Workshop
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Learn modern web design techniques and build stunning websites.
              Get hands-on experience with the latest tools and technologies.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold">Modern Design Techniques</h3>
                  <p className="text-primary-100 text-sm">
                    Learn responsive design, UI/UX principles, and modern
                    frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="font-semibold">Hands-on Projects</h3>
                  <p className="text-primary-100 text-sm">
                    Build real websites and create an impressive portfolio
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="font-semibold">Certificate & Support</h3>
                  <p className="text-primary-100 text-sm">
                    Get certified and receive ongoing career support
                  </p>
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
