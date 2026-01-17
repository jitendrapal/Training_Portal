import { useNavigate } from "react-router-dom";

const Internship = () => {
  const navigate = useNavigate();

  const internships = [
    {
      id: 1,
      title: "Java Full Stack Development Internship",
      description:
        "Comprehensive internship program working with Java, Spring Boot, React, and microservices. Build enterprise-level applications with real clients.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Microservices"],
      features: [
        "Enterprise Project Development",
        "Microservices Architecture",
        "Real Client Applications",
        "Performance-based Stipend",
        "Professional Experience Certificate",
      ],
      popular: true,
      icon: "☕",
    },
    {
      id: 2,
      title: "MERN Stack Development Internship",
      description:
        "Intensive internship program working with React, Node.js, Express, MongoDB, and cloud deployment. Contribute to real MERN stack applications.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      features: [
        "Live MERN Stack Projects",
        "Cloud Deployment Experience",
        "API Development Practice",
        "Database Design Skills",
        "Professional Portfolio",
      ],
      popular: false,
      icon: "⚛️",
    },
    {
      id: 3,
      title: "Python Full Stack Development Internship",
      description:
        "Comprehensive internship working with Django, React, APIs, and data handling. Gain practical experience in Python web development.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: ["Python", "Django", "React", "PostgreSQL", "Docker"],
      features: [
        "Beginner-Friendly Environment",
        "Data Science Projects",
        "Web Scraping Applications",
        "API Development Experience",
        "Career Development Support",
      ],
      popular: false,
      icon: "🐍",
    },
    {
      id: 4,
      title: ".NET Development Internship",
      description:
        "Professional internship program working with C#, ASP.NET Core, Entity Framework, and Azure. Build scalable enterprise applications in a real development environment.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
        "Azure",
      ],
      features: [
        "Live Enterprise Projects",
        "Real-world Development",
        "Senior Developer Mentorship",
        "Performance-based Stipend",
        "Professional Experience Certificate",
      ],
      popular: true,
      icon: "🔷",
    },
    {
      id: 5,
      title: "AI & Machine Learning Internship",
      description:
        "Advanced internship program in Artificial Intelligence and Machine Learning with Python. Work on real AI projects and build intelligent applications.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      features: [
        "AI Project Development",
        "Machine Learning Implementation",
        "Deep Learning Applications",
        "Data Analysis Experience",
        "Real-world AI Solutions",
      ],
      popular: true,
      icon: "🤖",
    },
    {
      id: 6,
      title: "Frontend Development Internship",
      description:
        "Practical internship program in front-end web development with HTML5, CSS3, and jQuery. Create responsive and interactive websites for real clients.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: [
        "HTML5",
        "CSS3",
        "jQuery",
        "Bootstrap",
        "Responsive Design",
      ],
      features: [
        "Responsive Web Design Projects",
        "Interactive UI/UX Development",
        "Cross-browser Testing",
        "Modern CSS Implementation",
        "Professional Portfolio Building",
      ],
      popular: false,
      icon: "🌐",
    },
    {
      id: 7,
      title: "Mobile App Development Internship",
      description:
        "Comprehensive internship program building mobile applications for Android and iOS platforms. Work on native and cross-platform development projects.",
      duration: "6 Months",
      schedule: "Full-time | Hybrid/Online",
      technologies: [
        "Java/Kotlin",
        "Swift",
        "React Native",
        "Flutter",
        "Firebase",
      ],
      features: [
        "Native App Development Experience",
        "Cross-platform Project Work",
        "App Store Deployment Process",
        "Mobile UI/UX Design Practice",
        "Real Device Testing Experience",
      ],
      popular: false,
      icon: "📱",
    },
  ];

  const handleApplyClick = () => {
    navigate("/enroll", { state: { scrollToForm: true } });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎓 Professional Internship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our comprehensive 6-month internship programs with
            performance-based stipends. Work on real client projects and gain
            valuable industry experience.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {internships.map((internship) => (
            <div
              key={internship.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                internship.popular ? "ring-2 ring-secondary-400" : ""
              }`}
            >
              {/* Popular Badge */}
              {internship.popular && (
                <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-center py-2 px-4">
                  <span className="text-sm font-semibold">🔥 Most Popular</span>
                </div>
              )}

              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{internship.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {internship.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {internship.description}
                </p>

                {/* Duration and Schedule */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center text-primary-600">
                    <span className="font-semibold">
                      ⏱️ {internship.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <span className="font-semibold">
                      📅 {internship.schedule}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    What You'll Get:
                  </h4>
                  <ul className="space-y-2">
                    {internship.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6">
                <button
                  onClick={handleApplyClick}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    internship.popular
                      ? "bg-gradient-to-r from-secondary-600 to-secondary-700 hover:from-secondary-700 hover:to-secondary-800 text-white"
                      : "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white"
                  }`}
                >
                  Apply for Internship
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Why Our Internship Programs Stand Out
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">👨‍💻</div>
                <h4 className="font-semibold text-gray-900">
                  Senior Developer Mentorship
                </h4>
                <p className="text-gray-600 text-sm">
                  Work directly with professionals with 10+ years experience
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-semibold text-gray-900">
                  Performance-based Stipend
                </h4>
                <p className="text-gray-600 text-sm">
                  Earn while you learn and gain experience
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏢</div>
                <h4 className="font-semibold text-gray-900">
                  Real Client Projects
                </h4>
                <p className="text-gray-600 text-sm">
                  Work on live projects for actual clients and businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
