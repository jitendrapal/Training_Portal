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
        title="Get Started | Professional Software Development Services"
        description="Partner with Neuro Edge Technologies for professional software development services. Custom web applications, mobile apps, enterprise solutions. Contact us for your next digital project!"
        keywords="Software Development Services, Custom Web Development, Mobile App Development, Enterprise Software, Software Consulting, Digital Solutions, Web Application Development Pune"
        canonical="/enroll"
        structuredData={enrollStructuredData}
      />
      <EnrollmentForm />
    </div>
  );
};

export default EnrollPage;
