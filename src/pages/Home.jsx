import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Internship from "../components/Internship";
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
          "Best IT Training Institute for Full Stack Development Courses",
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
        title="Best IT Training Institute | Full Stack Developer Courses"
        description="Learn Full Stack Development with Java, React, Node.js, Python at Neuro Edge Technologies. 95% placement rate, expert trainers, hands-on projects. Join 500+ successful graduates at top companies in Pune, India."
        keywords="Full Stack Developer Course India, Java Full Stack Bootcamp Pune, React Node.js Training, Python Full Stack Course, Best IT Training Institute Pune, Programming Courses India, Web Development Training, Coding Bootcamp India, Software Development Course, MERN Stack Training"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <Courses />
      <Services />
      <Internship />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
