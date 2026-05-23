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
        title="AI & Technology Workshop Enquiry | Job-Ready Training Programs"
        description="Get information about AI and technology workshops at Neuro Edge Technologies, including AI Workshop, Agentic AI, Java Full Stack, Python Full Stack, Azure, and career-focused IT training with internship support."
        keywords="Workshop Enquiry, AI Workshop, Agentic AI, Job-Ready Training, Best IT institute in Wagholi Pune, Internship Support, Java Workshop, Python Workshop, Azure Training Workshop, AI Training, Software Training Pune, IT Training Institute"
        canonical="/workshop"
        structuredData={workshopStructuredData}
      />

      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Workshop Enquiry for Job-Ready Training
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Learn about our career-focused workshops and training programs.
            Discover how our practical sessions, internship support, and
            placement guidance can help you become job-ready.
          </p>
        </div>
      </section>

      <WorkshopEnquiryForm />
    </div>
  );
};

export default WorkshopPage;
