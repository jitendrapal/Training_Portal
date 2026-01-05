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
      "Learn about Neuro Edge Technologies - Leading IT Training Institute in Pune with 95% placement rate, expert trainers, and comprehensive Full Stack Development courses.",
  };

  return (
    <div className="pt-24">
      <SEO
        title="About Us | Leading IT Training Institute in Pune"
        description="Neuro Edge Technologies is a premier IT training institute in Pune with 95% placement rate. Expert trainers, modern curriculum, hands-on projects. Empowering 500+ developers since 2020."
        keywords="About Neuro Edge Technologies, Best IT Training Institute Pune, Software Training Company India, Full Stack Development Institute, Programming Education Pune, IT Career Training"
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
              Empowering the next generation of developers with cutting-edge
              technology education and industry-ready skills since 2020.
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
                Neuro Edge Technologies — Empowering Tomorrow’s Tech
                Professionals, our mission is to bridge the gap between
                traditional education and real industry demands by delivering
                practical, hands-on training in the latest and most in-demand
                technologies. We believe in learning by doing, which is why
                every program we offer is built around real-world projects,
                industry best practices, and problem-solving that mirrors actual
                workplace challenges.
              </p>
              <p className="text-lg text-gray-600">
                We believe in learning by doing, which is why our courses are
                designed around real-world projects and industry best practices.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary-800 mb-4">
                Our Vision
              </h3>
              <p className="text-primary-700">
                To become the leading IT training institute that transforms
                passionate learners into skilled professionals ready to excel in
                the global technology landscape.
              </p>
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
                95%
              </div>
              <div className="text-gray-600">Placement Rate</div>
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
