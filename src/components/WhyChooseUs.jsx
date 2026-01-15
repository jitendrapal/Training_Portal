import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Industry Expert Trainers",
      description:
        "Learn from professionals with 10+ years of experience in top tech companies like Google, Microsoft, and Amazon.",
      highlights: [
        "Real-world experience",
        "Current industry practices",
        "Personalized mentorship",
      ],
    },
    {
      icon: "🛠️",
      title: "Hands-on Projects",
      description:
        "Build real applications that solve actual business problems. Create a portfolio that impresses employers.",
      highlights: [
        "Live project experience",
        "GitHub portfolio",
        "Industry-standard code",
      ],
    },
    {
      icon: "⏰",
      title: "Flexible Timings",
      description:
        "Choose from morning, evening, or weekend batches. Perfect for working professionals and students.",
      highlights: [
        "Multiple batch options",
        "Recorded sessions",
        "Makeup classes available",
      ],
    },
    {
      icon: "🎯",
      title: "Career Assistance",
      description:
        "From resume building to interview preparation, we support you until you land your dream job.",
      highlights: [
        "Resume optimization",
        "Mock interviews",
        "Job placement support",
      ],
    },
    {
      icon: "💻",
      title: "Modern Curriculum",
      description:
        "Stay ahead with the latest technologies and frameworks that companies are actively hiring for.",
      highlights: [
        "Updated every 6 months",
        "Industry-relevant skills",
        "Future-proof technologies",
      ],
    },
    {
      icon: "🤝",
      title: "Technical Community Support",
      description:
        "Join a network of professionals working in top companies. Get continuous support even after your course completion.",
      highlights: [
        "Professional network",
        "Peer learning",
        "Lifetime access to community",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Neuro Edge Technologies?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach coding - we transform careers. Here's what makes
            us the #1 choice for aspiring developers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>

              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Success Stories Preview */}
        {/* <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Join 500+ Successful Graduates
              </h3>
              <p className="text-primary-100 mb-6">
                Our students have landed jobs at top companies with average
                salary increases of 300%. Your success story could be next!
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm text-primary-100">Average Salary</div>
                  <div className="text-xl font-bold">₹8.5 LPA</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm text-primary-100">Placement Assistance</div>
                  <div className="text-xl font-bold">100%</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="text-sm text-primary-100">Time to Job</div>
                  <div className="text-xl font-bold">3 Months</div>
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("testimonials");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Success Stories
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">TCS</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Infosys</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Wipro</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Accenture</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">Cognizant</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">HCL</div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                Hiring Partners
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
