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
        title="Enroll Now | Join Full Stack Development Courses"
        description="Enroll now for Full Stack Development courses at Neuro Edge Technologies. Limited seats available. Java, Python, MERN Stack training with 100% Placement assistance. Start your IT career today!"
        keywords="Enroll Full Stack Course, Join IT Training Program, Software Development Course Enrollment, Programming Course Registration, IT Career Training Pune"
        canonical="/enroll"
        structuredData={enrollStructuredData}
      />
      <EnrollmentForm />
    </div>
  );
};

export default EnrollPage;
