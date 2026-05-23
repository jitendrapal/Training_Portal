import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Courses from "../components/Courses";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import { organizationSchema } from "../utils/structuredData";

const Home = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      {
        "@type": "WebSite",
        "@id": "https://neuroedgetechnologies.com/#website",
        url: "https://neuroedgetechnologies.com/",
        name: "Neuro Edge Technologies",
        description:
          "Professional software training institute offering career-ready courses, internship placements, and live project learning for aspiring developers",
        publisher: {
          "@id": "https://neuroedgetechnologies.com/#organization",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://neuroedgetechnologies.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
    ],
  };

  return (
    <div>
      <SEO
        title="Job-Ready Training Programs | Software Training Institute Pune"
        description="Top job-ready training programs in Pune with internship support, live project learning, and placement preparation. Join our IT courses in Java Full Stack, .NET Full Stack, Python Full Stack, SQL, Azure, AI, and more."
        keywords="Job-Ready Training Programs, Job Ready Training Program, job ready course, Job Oriented Course, job oriented course, Job Placement Support, job placement support, Job Assistance, job assistance, Software Training Institute Pune, IT Training Institute, Best IT institute in Wagholi Pune, Best institute in Wagholi, Java Full Stack Course, .NET Full Stack Course, Python Full Stack Course, SQL Database Course, C++ Course, C Course, Azure Training, AI Training, Agentic AI, AI Workshop, Internship Support, Placement Support, Live Project Courses"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <Courses />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
