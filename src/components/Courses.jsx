import React from 'react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Java Full Stack Developer",
      description: "Learn Java, Spring Boot, React, REST APIs, and databases. Build enterprise-level applications from scratch.",
      duration: "6 Months",
      schedule: "2 Hours/Day",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
      price: "₹45,000",
      originalPrice: "₹60,000",
      features: [
        "Live Interactive Classes",
        "Real-world Projects",
        "Industry Mentorship",
        "Job Placement Support",
        "Certificate of Completion"
      ],
      popular: true,
      icon: "☕"
    },
    {
      id: 2,
      title: "React + Node Full Stack Developer",
      description: "Master modern web development with React, Node.js, Express, MongoDB, and deployment strategies.",
      duration: "3 Months",
      schedule: "3 Hours/Day",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      price: "₹35,000",
      originalPrice: "₹45,000",
      features: [
        "MERN Stack Mastery",
        "Cloud Deployment",
        "API Development",
        "Database Design",
        "Portfolio Projects"
      ],
      popular: false,
      icon: "⚛️"
    },
    {
      id: 3,
      title: "Python Full Stack Developer",
      description: "Learn Django, React, APIs, and data handling. Perfect for beginners and career switchers.",
      duration: "4 Months",
      schedule: "2.5 Hours/Day",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Docker"],
      price: "₹40,000",
      originalPrice: "₹55,000",
      features: [
        "Beginner Friendly",
        "Data Science Integration",
        "Web Scraping",
        "API Development",
        "Career Guidance"
      ],
      popular: false,
      icon: "🐍"
    }
  ]

  const scrollToEnroll = () => {
    const element = document.getElementById('enroll')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our industry-focused programs designed to make you job-ready. 
            All courses include hands-on projects, mentorship, and placement support.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover ${
                course.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Most Popular
                </div>
              )}

              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-3">{course.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <span className="mr-4">📅 {course.duration}</span>
                      <span>⏰ {course.schedule}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
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
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Course Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save ₹{parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={scrollToEnroll}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      course.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    Enroll Now
                  </button>
                  <button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                </div>
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
                <h4 className="font-semibold text-gray-900">Industry Experts</h4>
                <p className="text-gray-600 text-sm">Learn from professionals with 10+ years experience</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-semibold text-gray-900">Job Guarantee</h4>
                <p className="text-gray-600 text-sm">100% placement support or money back</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💼</div>
                <h4 className="font-semibold text-gray-900">Real Projects</h4>
                <p className="text-gray-600 text-sm">Build portfolio with live industry projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
