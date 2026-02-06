import React from "react";
import SEO from "../components/SEO";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { organizationSchema } from "../utils/structuredData";

const AboutPage = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: organizationSchema,
    description:
      "Learn about Neuro Edge Technologies - Leading software development company in Pune specializing in custom web applications, mobile apps, and enterprise solutions with expert development team.",
  };

  return (
    <div className="pt-24">
      <SEO
        title="About Us | Leading IT Software Development center in Pune"
        description="Neuro Edge Technologies is a premier software development company in Pune delivering custom web applications, mobile apps, and enterprise solutions. Expert developers, innovative technologies, scalable solutions. Empowering 500+ businesses since 2020."
        keywords="About Neuro Edge Technologies, Software Development Company Pune, Custom Software Solutions India, Web Development Company, Mobile App Development, Enterprise Software, Digital Solutions Provider, Software Consulting Pune"
        canonical="/about"
        structuredData={aboutStructuredData}
      />

      {/* About Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Neuro Edge Technologies
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Startup software development company delivering innovative,
              scalable, and cost-effective digital solutions to businesses
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To deliver world-class software solutions by combining deep
                engineering expertise, modern technologies, and a strong focus
                on quality and scalability. We strive to help organizations
                accelerate digital transformation, improve operational
                efficiency, and create sustainable business value through
                innovative, secure, and high-performance software systems.
              </p>
              <p className="text-lg text-gray-600">
                We believe in practical experience and hands-on development,
                which is why we also offer live project internship opportunities
                to bridge the gap between industry needs and emerging talent.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Our Vision
              </h3>
              <p className="text-primary-700">
                To become a leading software development company that delivers
                innovative, scalable, and reliable technology solutions,
                empowering businesses to succeed in the global digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized software development services and internship
              opportunities for businesses and aspiring developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  💻 Software Development Services
                </h3>
                <p className="text-gray-600">
                  We build custom web applications, mobile apps, and enterprise
                  software solutions using modern technologies. Our team
                  specializes in full-stack development, cloud deployment, and
                  scalable architecture design to help businesses achieve their
                  digital goals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🎯 Live Project Internships
                </h3>
                <p className="text-gray-600">
                  We offer hands-on internship programs where participants work
                  on real client projects. This approach bridges the gap between
                  theoretical knowledge and practical industry experience,
                  preparing interns for successful careers in software
                  development.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">
                Why Choose Neuro Edge Technologies
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Modern Technology Stack:</strong> We use
                    cutting-edge tools and frameworks to deliver future-ready
                    solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Quality-First Approach:</strong> Every project
                    follows industry best practices and rigorous testing
                    standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Talent Development:</strong> We nurture emerging
                    developers through practical, project-based learning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-300 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Startup Agility:</strong> Fast decision-making and
                    flexible solutions tailored to your business needs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Placement Assistance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default AboutPage;
