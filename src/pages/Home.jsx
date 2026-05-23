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
        title="Job-Oriented Courses | Best Institute in Wagholi Pune"
        description="Job-oriented courses and the best institute in Wagholi Pune for IT training, internship support, placement preparation, and live project learning in Java, .NET, Python, SQL, Azure, and AI."
        keywords="Job-Oriented Courses, Best Institute in Wagholi Pune, job ready course, Job Placement Support, Job Assistance, Job Oriented Course, Job Ready Training Programs, IT Training Institute, Java Full Stack Course, .NET Full Stack Course, Python Full Stack Course, SQL Database Course, Azure Training, AI Training, Agentic AI, AI Workshop, Internship Support, Placement Support"
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
