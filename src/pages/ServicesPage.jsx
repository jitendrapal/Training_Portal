import React from "react";
import SEO from "../components/SEO";
import Services from "../components/Services";

const ServicesPage = () => {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Training Programs | Job-Ready Courses",
    description:
      "Explore career-focused training programs at Neuro Edge Technologies. Learn modern technologies, gain internship support, and become job-ready.",
    url: "https://neuroedgetechnologies.com/services",
  };

  return (
    <div className="pt-24">
      <SEO
        title="IT Services & Support | Neuro Edge Technologies"
        description="Explore our IT services, custom software solutions, cloud and AI support, and training assistance. We deliver professional software services alongside training guidance for learners and businesses."
        keywords="IT Services, Software Development Services, Cloud Services, AI Solutions, Custom Software, Digital Transformation, Training Assistance, Career Support, Internship Guidance, Placement Support, Job Oriented Course, job oriented course, Job Ready Course, job ready course, Job Placement Support, job placement support, Job Assistance, job assistance, Best institute in Wagholi"
        canonical="/services"
        structuredData={servicesStructuredData}
      />
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Training Programs
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive training programs designed to build job-ready skills
            and prepare you for real-world software careers.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Our Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Training?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver career-focused training through expert instructors,
              practical projects, and job-ready learning outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Trainers
              </h3>
              <p className="text-gray-600">
                Learn from industry professionals who bring real-world
                experience to every session.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Career-Focused Curriculum
              </h3>
              <p className="text-gray-600">
                Structured learning paths designed to build the skills employers
                demand today.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project-Based Learning
              </h3>
              <p className="text-gray-600">
                Build real projects that strengthen your resume and interview
                readiness.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Placement Support
              </h3>
              <p className="text-gray-600">
                Receive resume help, interview coaching, and employer referral
                guidance after course completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies to build robust, scalable
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React",
              "Node.js",
              "Python",
              "Java",
              "AWS",
              "Docker",
              "MongoDB",
              "PostgreSQL",
              "Flutter",
              "Angular",
              "Kubernetes",
              "Azure",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-gray-800">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
