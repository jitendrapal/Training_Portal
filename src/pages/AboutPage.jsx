import React from "react";
import SEO from "../components/SEO";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { organizationSchema } from "../utils/structuredData";
import directorImage from "../assets/neuro_director.png";

const AboutPage = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: organizationSchema,
    description:
      "Learn about Neuro Edge Technologies - A leading software training institute in Pune delivering career-focused courses, live projects, and internship-ready pathways for aspiring developers.",
  };

  return (
    <div className="pt-24">
      <SEO
        title="About Us | Career-Focused IT Training Institute in Pune"
        description="Neuro Edge Technologies is a career-focused IT training institute in Pune offering live project courses, internship support, job-ready coaching, and training in Full Stack Development, Python, Data Science, AI/ML, Cloud Computing, Cyber Security, Software Testing, and DevOps."
        keywords="IT Training Institute Wagholi, Best IT Institute in Wagholi, IT Training Institute in Wagholi Pune, Job Oriented IT Courses in Wagholi, Placement Assistance IT Training, IT Classes Near Me, Software Training Institute Wagholi, Python Training in Wagholi, Java Full Stack Course, MERN Stack Training, Full Stack Developer Course, AI Course in Wagholi, Data Science Course Pune, Cloud Computing Course, DevOps Course, Cyber Security Course, Software Testing Course, Job-Oriented Courses, Job Ready Course, Job Placement Support, Internship Support, Placement Support"
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
              A career-focused software training institute delivering hands-on
              courses, live projects, and internship-ready learning for aspiring
              developers.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/about/team"
                className="inline-flex items-center justify-center rounded-full bg-white text-primary-800 px-8 py-3 font-semibold shadow-lg hover:bg-slate-100"
              >
                Meet Our Team
              </a>
            </div>
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
                To deliver world-class software training programs that prepare
                learners for industry careers through practical projects, expert
                mentorship, and a job-ready curriculum. We strive to bridge the
                gap between education and employment for emerging talent.
              </p>
              <p className="text-lg text-gray-600">
                We believe in practical experience and hands-on development,
                which is why we also offer live project training and
                internship-support pathways to bridge the gap between industry
                needs and emerging talent.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl flex flex-col justify-center text-center h-full">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Our Vision
              </h3>
              <p className="text-primary-700 text-lg">
                To become a leading software development company that delivers
                innovative, scalable, and reliable technology solutions,
                empowering businesses to succeed in the global digital
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding Neuro Edge Technologies towards excellence in IT training
              and software development.
            </p>
          </div>
          ok
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
              Specialized training programs and career-ready internship support
              for aspiring software professionals.
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
                  🎯 Live Project Training & Internship Support
                </h3>
                <p className="text-gray-600">
                  We deliver practical training where learners work on real
                  client-style projects, while also providing internship-ready
                  guidance that prepares candidates for career success.
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
