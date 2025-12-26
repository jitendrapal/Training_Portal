import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Website Development",
      description:
        "Build responsive, modern websites with cutting-edge technologies. From landing pages to complex web applications.",
      icon: "🌐",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Modern UI/UX",
      ],
    },
    {
      id: 2,
      title: "Desktop Development",
      description:
        "Create powerful desktop applications for Windows, macOS, and Linux with native performance and user experience.",
      icon: "💻",
      features: [
        "Cross-Platform",
        "Native Performance",
        "Offline Capability",
        "System Integration",
      ],
    },
    {
      id: 3,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs. Enterprise-grade applications with scalable architecture.",
      icon: "⚙️",
      features: [
        "Custom Solutions",
        "Scalable Architecture",
        "Enterprise-Grade",
        "Maintenance Support",
      ],
    },
    {
      id: 4,
      title: "Software Testing",
      description:
        "Comprehensive testing services to ensure your software is bug-free, secure, and performs optimally.",
      icon: "🧪",
      features: [
        "Automated Testing",
        "Manual Testing",
        "Performance Testing",
        "Security Audits",
      ],
    },
    {
      id: 5,
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android. Engaging user experiences on every device.",
      icon: "📱",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "App Store Deployment",
        "Push Notifications",
      ],
    },
    {
      id: 6,
      title: "Workflow Automation",
      description:
        "Streamline your business processes with intelligent automation. Save time and reduce manual errors.",
      icon: "🔄",
      features: [
        "Process Automation",
        "Integration Services",
        "Custom Workflows",
        "Efficiency Boost",
      ],
    },
    {
      id: 7,
      title: "Digital Marketing",
      description:
        "Grow your online presence with data-driven digital marketing strategies. SEO, social media, and content marketing.",
      icon: "📈",
      features: [
        "SEO Services",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting",
      ],
    },
    {
      id: 8,
      title: "UI/UX Design",
      description:
        "Create stunning, user-friendly interfaces that delight users. Research-driven design for optimal user experience.",
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
    {
      id: 9,
      title: "Cloud & DevOps Services",
      description:
        "Deploy, manage, and scale your applications with cloud infrastructure and DevOps best practices.",
      icon: "☁️",
      features: [
        "Cloud Migration",
        "CI/CD Pipeline",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
    {
      id: 10,
      title: "IT Support & IT Outsourcing",
      description:
        "Reliable IT support and outsourcing services. Focus on your business while we handle your technology needs.",
      icon: "🛠️",
      features: [
        "24/7 Support",
        "Remote Assistance",
        "Dedicated Teams",
        "Cost-Effective",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions to transform your business and drive
            digital success
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Header */}
              <div className="p-6">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals.
            Contact us today for a free consultation.
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

