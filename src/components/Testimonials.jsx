import React, { useState } from "react";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Mehta",
      role: "Software Developer",
      company: "TCS",
      location: "Pune",
      image: "👨‍💻",
      rating: 5,
      course: "Java Full Stack",
      salary: "₹6.5 LPA",
      testimonial:
        "The Java Full Stack Bootcamp helped me get placed in TCS within 3 months! The trainers were amazing and the hands-on projects gave me real confidence. I went from zero coding knowledge to building full applications.",
      beforeAfter: {
        before: "Non-IT Background",
        after: "Software Developer at TCS",
      },
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Frontend Developer",
      company: "Infosys",
      location: "Bangalore",
      image: "👩‍💻",
      rating: 5,
      course: "React + Node Full Stack",
      salary: "₹7.2 LPA",
      testimonial:
        "Amazing experience! The React course was perfectly structured. I loved the project-based learning approach. The career support team helped me prepare for interviews and I got multiple offers.",
      beforeAfter: {
        before: "Fresher Graduate",
        after: "Frontend Developer at Infosys",
      },
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Full Stack Developer",
      company: "Wipro",
      location: "Hyderabad",
      image: "👨‍🔬",
      rating: 5,
      course: "Python Full Stack",
      salary: "₹8.0 LPA",
      testimonial:
        "Switched from mechanical engineering to software development. The Python course was beginner-friendly yet comprehensive. The mentors guided me throughout my career transition journey.",
      beforeAfter: {
        before: "Mechanical Engineer",
        after: "Full Stack Developer at Wipro",
      },
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Software Engineer",
      company: "Accenture",
      location: "Mumbai",
      image: "👩‍🎓",
      rating: 5,
      course: "Java Full Stack",
      salary: "₹9.5 LPA",
      testimonial:
        "The best decision I made for my career! The curriculum is industry-relevant and the placement support is outstanding. I got placed in Accenture with a great package. Highly recommended!",
      beforeAfter: {
        before: "Final Year Student",
        after: "Software Engineer at Accenture",
      },
    },
    {
      id: 5,
      name: "Vikash Singh",
      role: "Backend Developer",
      company: "HCL",
      location: "Chennai",
      image: "👨‍💼",
      rating: 5,
      course: "React + Node Full Stack",
      salary: "₹7.8 LPA",
      testimonial:
        "Working professional looking to upskill. The flexible evening batches were perfect for me. The practical approach and real projects helped me transition to a better role with 60% salary hike.",
      beforeAfter: {
        before: "Support Engineer",
        after: "Backend Developer at HCL",
      },
    },
    {
      id: 6,
      name: "Anita Reddy",
      role: "Full Stack Developer",
      company: "Cognizant",
      location: "Pune",
      image: "👩‍🚀",
      rating: 5,
      course: "Python Full Stack",
      salary: "₹6.8 LPA",
      testimonial:
        "As a working mother, the weekend batches were a blessing. The supportive community and excellent teaching methodology helped me restart my career in tech after a 3-year break.",
      beforeAfter: {
        before: "Career Break",
        after: "Full Stack Developer at Cognizant",
      },
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who transformed their careers and landed
            dream jobs at top companies.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Testimonial Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="text-6xl mr-4">{currentTestimonial.image}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-primary-600 font-semibold">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-600">
                    {currentTestimonial.company} • {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">
                  ({currentTestimonial.rating}/5)
                </span>
              </div>

              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Course and Salary Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentTestimonial.course}
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Package: {currentTestimonial.salary}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  {activeTestimonial + 1} of {testimonials.length}
                </div>
              </div>
            </div>

            {/* Right Side - Before/After */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 lg:p-12 text-white">
              <h4 className="text-2xl font-bold mb-8">Career Transformation</h4>

              <div className="space-y-8">
                <div>
                  <div className="text-primary-200 text-sm font-medium mb-2">
                    BEFORE
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-lg font-semibold">
                      {currentTestimonial.beforeAfter.before}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="text-primary-200 text-sm font-medium mb-2">
                    AFTER
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-lg font-semibold">
                      {currentTestimonial.beforeAfter.after}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">
                    {currentTestimonial.salary}
                  </div>
                  <div className="text-primary-200 text-sm">
                    Starting Package
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeTestimonial ? "bg-primary-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Students Placed</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">₹8.5L</div>
            <div className="text-gray-600">Avg. Package</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Hiring Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
