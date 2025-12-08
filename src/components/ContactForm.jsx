import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { submitToGoogleSheets, FORM_CONFIG } from "../config/googleSheets";

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    // More strict email validation - must have proper email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const validatePhone = (phone) => {
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, "");
    // Check if it's exactly 10 digits and starts with 6, 7, 8, or 9 (Indian mobile format)
    return cleanPhone.length === 10 && /^[6-9][0-9]{9}$/.test(cleanPhone);
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email =
        "Please enter a valid email format (e.g., user@example.com)";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone =
        "Please enter exactly 10 digits starting with 6, 7, 8, or 9";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Message validation (optional field)
    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Format phone number to only allow digits
  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");
    // Limit to 10 digits
    return cleaned.slice(0, 10);
  };

  // Real-time field validation
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value))
          return "Please enter a valid email format (e.g., user@example.com)";
        return "";

      case "phone":
        if (!value.trim()) return "Mobile number is required";
        if (!validatePhone(value))
          return "Please enter exactly 10 digits starting with 6, 7, 8, or 9";
        return "";

      case "subject":
        if (!value.trim()) return "Subject is required";
        return "";

      case "message":
        // Message is optional, but if provided, must be at least 10 characters
        if (value.trim() && value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";

      default:
        return "";
    }
  };

  // Optimized form change handler with real-time validation
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    let processedValue = value;

    // Special handling for phone number
    if (name === "phone") {
      processedValue = formatPhoneNumber(value);
    }

    // Update form data
    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Real-time validation - show error immediately as user types
    const fieldError = validateField(name, processedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  }, []);

  // Navigate to home page after submission
  const navigateToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Show form with fast animation and handle scroll
  useEffect(() => {
    setIsVisible(true);

    // Check if we need to scroll to form
    if (location.state?.scrollToForm) {
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location.state]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Validate form before submission
      if (!validateForm()) {
        // Validation errors are already shown in real-time
        return;
      }

      setIsSubmitting(true);

      // Show success immediately for better UX
      setIsSubmitted(true);

      try {
        // Submit to Google Sheets in background (non-blocking)
        console.log("Contact form data being submitted:", formData);
        console.log("Form type:", FORM_CONFIG.FORM_TYPES.CONTACT);

        submitToGoogleSheets(formData, FORM_CONFIG.FORM_TYPES.CONTACT);

        // Auto-redirect after 3 seconds for better UX
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          navigateToHome();
        }, FORM_CONFIG.SUCCESS_REDIRECT_DELAY);
      } catch (error) {
        console.error("Error submitting contact form:", error);
        // Still show success for better UX
      }
    },
    [formData, navigateToHome]
  );

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-green-600 to-green-700"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting us! We've received your message and will
              get back to you within 24 hours.
            </p>
            <button
              onClick={navigateToHome}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700"
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
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-primary-100 mb-8">
              Have questions about our courses? Need guidance on your career
              path? We're here to help you start your journey to becoming a
              skilled developer.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold">Free Consultation</h3>
                  <p className="text-primary-100 text-sm">
                    Get personalized advice on course selection and career
                    planning
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-primary-100 text-sm">+91-8055006652</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-primary-100 text-sm">
                    info@neuroedgetechnologies.com
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-primary-100 text-sm">
                    Neuro Edge Technologies 4th Floor, Office No 401 Vishwaraj
                    Pride,Opposite Zudio, Wagholi Pune Maharashtra Pune 412207
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
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h4 className="font-semibold mb-2">💡 Why Contact Us?</h4>
              <p className="text-primary-100 text-sm">
                Get expert guidance on course selection, career planning, and
                admission process. Our counselors are here to help you make the
                right choice for your tech career.
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
                Send us a Message
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors ${
                    errors.name
                      ? "border-red-500 bg-red-50"
                      : formData.name && !errors.name
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors ${
                    errors.email
                      ? "border-red-500 bg-red-50"
                      : formData.email && !errors.email
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your email address (e.g., john@example.com)"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors ${
                    errors.phone
                      ? "border-red-500 bg-red-50"
                      : formData.phone && !errors.phone
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Enter your 10-digit mobile number (e.g., 9876543210)"
                  maxLength="10"
                  pattern="[6-9][0-9]{9}"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors ${
                    errors.subject
                      ? "border-red-500 bg-red-50"
                      : formData.subject && !errors.subject
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="Course Inquiry">Course Inquiry</option>
                  <option value="Admission Process">Admission Process</option>
                  <option value="Fee Structure">Fee Structure</option>
                  <option value="Placement Support">Placement Support</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 bg-red-50"
                      : formData.message && !errors.message
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                  }`}
                  placeholder="Tell us about your inquiry or questions... (optional)"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
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
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
