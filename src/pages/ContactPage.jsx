import React from "react";
import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";
import { organizationSchema } from "../utils/structuredData";

const ContactPage = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      ...organizationSchema,
      "@type": "EducationalOrganization",
    },
  };

  return (
    <div className="pt-24">
      <SEO
        title="Contact Us | IT Training Institute Pune"
        description="Contact Neuro Edge Technologies for IT course enrollment, internship support, placement assistance, and training inquiries. We offer in-demand courses like Full Stack Development, Python, Data Science, AI/ML, Cloud Computing, Cyber Security, Software Testing, and DevOps."
        keywords="IT Training Institute Wagholi, Best IT Institute in Wagholi, IT Training Institute in Wagholi Pune, Job Oriented IT Courses in Wagholi, Placement Assistance IT Training, IT Classes Near Me, Software Training Institute Wagholi, Python Training in Wagholi, Java Full Stack Course, MERN Stack Training, Full Stack Developer Course, Web Development Course, AI Course in Wagholi, Machine Learning Course, Data Science Course Pune, Cloud Computing Course, Cyber Security Course, Software Testing Course, Job-Oriented Courses, Job Placement Support, Internship Support, Placement Support"
        canonical="/contact"
        structuredData={contactStructuredData}
      />

      {/* Contact Hero Section */}
      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch for Training & Career Support
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Reach out to learn more about our job-ready courses, internship
            support, and placement guidance. We are here to help you begin your
            software career.
          </p>
        </div>
      </section>

      <ContactForm />

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our courses and services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are the course timings?
              </h3>
              <p className="text-gray-600">
                We offer flexible timings with morning (9 AM - 12 PM), evening
                (6 PM - 9 PM), and weekend batches to accommodate working
                professionals and students.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide placement assistance?
              </h3>
              <p className="text-gray-600">
                Yes! We provide comprehensive placement support including resume
                building, interview preparation, and direct job referrals to our
                partner companies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the fee structure?
              </h3>
              <p className="text-gray-600">
                Our course fees are competitive and we offer flexible payment
                options. Contact us for detailed fee structure and available
                discounts.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I attend classes online?
              </h3>
              <p className="text-gray-600">
                Yes, we offer both online and offline classes. All sessions are
                recorded and available for review, ensuring you never miss
                important content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
