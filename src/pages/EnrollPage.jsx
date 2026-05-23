import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";

const EnrollPage = () => {
  const enrollStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Enroll in Full Stack Development Courses",
    description:
      "Enroll now for Full Stack Development courses at Neuro Edge Technologies. Limited seats available. Start your IT career with expert training and guaranteed placement support.",
    url: "https://neuroedgetechnologies.com/enroll",
  };

  return (
    <div className="pt-24">
      <SEO
        title="Enroll Now | Job-Ready Training Programs"
        description="Enroll now in job-ready software training programs at Neuro Edge Technologies. Limited seats available for hands-on courses with internship support and placement preparation."
        keywords="Job-Ready Courses, Software Training Enrollment, Internship Support, Placement Preparation, Career-Focused Training, IT Training Pune"
        canonical="/enroll"
        structuredData={enrollStructuredData}
      />
      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enroll in Job-Ready Training Programs
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Register for our immersive training programs with internship
            support, practical projects, and placement preparation to accelerate
            your technology career.
          </p>
        </div>
      </section>
      <EnrollmentForm />
    </div>
  );
};

export default EnrollPage;
