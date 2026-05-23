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
        title="Software Training Institute | Courses with Internship & Placement Support"
        description="Professional software training institute in Pune offering practical courses, internship placements, live project learning, and placement support for students and working professionals."
        keywords="Software Training Institute Pune, Courses with Internship, Software Training Courses, Internship Placement Program, IT Training Institute, Career-Focused Coding Courses, Live Project Training, Placement Support"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <Services />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
