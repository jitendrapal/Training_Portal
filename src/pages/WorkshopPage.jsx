import React from "react";
import SEO from "../components/SEO";
import WorkshopEnquiryForm from "../components/WorkshopEnquiryForm";

const WorkshopPage = () => {
  const workshopStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Workshop Enquiry - Neuro Edge Technologies",
    description:
      "Enquire about workshops and training programs at Neuro Edge Technologies. Get information about our career-focused courses, internship support, and skill-building workshops.",
    url: "https://neuroedgetechnologies.com/workshop",
  };

  return (
    <div className="pt-24">
      <SEO
        title="Workshop Enquiry | Training Programs & Career Courses"
        description="Get information about workshops, training programs, and internship support at Neuro Edge Technologies. Enquire about Java, Python, React, and other technology workshops."
        keywords="Workshop Enquiry, Training Courses, Internship Support, Java Workshop, Python Workshop, React Workshop, Software Training Pune"
        canonical="/workshop"
        structuredData={workshopStructuredData}
      />
      <WorkshopEnquiryForm />
    </div>
  );
};

export default WorkshopPage;
