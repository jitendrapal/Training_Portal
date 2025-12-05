import React from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Java Full Stack Developer",
      description:
        "Learn Java, Spring Boot, React, REST APIs, and databases. Build enterprise-level applications from scratch.",
      duration: "6 Months",
      schedule: "2 Hours/Day",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
      features: [
        "Live Interactive Classes",
        "Real-world Projects",
        "Industry Mentorship",
        "Job Placement Support",
        "Certificate of Completion",
      ],
      popular: true,
      icon: "☕",
    },
    {
      id: 2,
      title: "React + Node Full Stack Developer",
      description:
        "Master modern web development with React, Node.js, Express, MongoDB, and deployment strategies.",
      duration: "3 Months",
      schedule: "2 Hours/Day",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      features: [
        "MERN Stack Mastery",
        "Cloud Deployment",
        "API Development",
        "Database Design",
        "Portfolio Projects",
      ],
      popular: false,
      icon: "⚛️",
    },
    {
      id: 3,
      title: "Python Full Stack Developer",
      description:
        "Learn Django, React, APIs, and data handling. Perfect for beginners and career switchers.",
      duration: "4 Months",
      schedule: "2 Hours/Day",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Docker"],
      features: [
        "Beginner Friendly",
        "Data Science Integration",
        "Web Scraping",
        "API Development",
        "Career Guidance",
      ],
      popular: false,
      icon: "🐍",
    },
  ];

  const handleEnrollClick = () => {
    navigate("/enroll", { state: { scrollToForm: true } });
  };

  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${
                course.popular ? "ring-2 ring-secondary-500" : ""
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{course.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span className="mr-4">📅 {course.duration}</span>
                      <span>⏰ {course.schedule}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    What's Included:
                  </h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Course Footer */}
              <div className="px-6 pb-6">
                <button
                  onClick={handleEnrollClick}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    course.popular
                      ? "bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white"
                      : "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white"
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Why Our Courses Stand Out
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">👨‍💻</div>
                <h4 className="font-semibold text-gray-900">
                  Industry Experts
                </h4>
                <p className="text-gray-600 text-sm">
                  Learn from professionals with 10+ years experience
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-gray-900">Job Support</h4>
                <p className="text-gray-600 text-sm">Free placement support</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-semibold text-gray-900">Live Projects</h4>
                <p className="text-gray-600 text-sm">
                  Build portfolio with live industry projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
