import { useNavigate } from "react-router-dom";

const Internship = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/enroll", { state: { scrollToForm: true } });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎓 Internship Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive internship opportunities for final year students. Gain real-world experience 
            and kickstart your career with industry projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🚀 Why Choose Our Internship?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real Industry Projects</h4>
                    <p className="text-gray-600">Work on live projects with real clients and gain hands-on experience in your field.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h4>
                    <p className="text-gray-600">Learn from industry professionals with 10+ years of experience.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📜</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Completion Certificate</h4>
                    <p className="text-gray-600">Receive industry-recognized certificates to boost your resume.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Job Placement Support</h4>
                    <p className="text-gray-600">Get assistance with job placements and career guidance after completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Program Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                📋 Program Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-900 font-semibold">3-6 Months</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Mode:</span>
                  <span className="text-gray-900 font-semibold">Hybrid (Online + Offline)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Eligibility:</span>
                  <span className="text-gray-900 font-semibold">Final Year Students</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Stipend:</span>
                  <span className="text-gray-900 font-semibold">Performance Based</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900 font-semibold">Rolling Admissions</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">🔥 Limited Seats Available!</h3>
              <p className="mb-6 text-primary-100">
                Only <strong>20 seats</strong> available per batch. Apply now to secure your spot 
                and get hands-on industry experience.
              </p>
              <button
                onClick={handleApplyClick}
                className="w-full bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Apply for Internship
              </button>
            </div>
          </div>
        </div>

        {/* Available Domains */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            🎯 Available Internship Domains
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Java Full Stack", icon: "☕" },
              { name: "React Development", icon: "⚛️" },
              { name: "Python Development", icon: "🐍" },
              { name: ".NET Development", icon: "🔷" },
              { name: "PHP Development", icon: "🐘" },
              { name: "AI & ML", icon: "🤖" },
              { name: "Mobile Development", icon: "📱" },
              { name: "Web Development", icon: "🌐" },
            ].map((domain, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{domain.icon}</div>
                <h4 className="font-semibold text-gray-900">{domain.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
