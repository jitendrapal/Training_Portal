import React from "react";
import SEO from "../components/SEO";
import WorkshopEnquiryForm from "../components/WorkshopEnquiryForm";

const WorkshopPage = () => {
  const workshopStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Workshop Enquiry - Neuro Edge Technologies",
    description:
      "Enquire about workshops and training programs at Neuro Edge Technologies. Get information about our internship programs, software development services, and job opportunities.",
    url: "https://neuroedgetechnologies.com/workshop",
  };

  return (
    <div className="pt-24">
      <SEO
        title="Workshop Enquiry | Training Programs & Internships"
        description="Get information about workshops, training programs, and internship opportunities at Neuro Edge Technologies. Enquire about Java, Python, React, and other technology workshops."
        keywords="Workshop Enquiry, Training Programs, Internship Programs, Java Workshop, Python Workshop, React Workshop, Software Development Training, Technology Workshops Pune"
        canonical="/workshop"
        structuredData={workshopStructuredData}
      />
      <WorkshopEnquiryForm />
    </div>
  );
};

export default WorkshopPage;
