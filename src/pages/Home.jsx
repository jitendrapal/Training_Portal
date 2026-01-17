import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
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
          "Leading Software Development Company specializing in custom web applications, mobile apps, and enterprise solutions",
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
        title="Leading Software Development Company | Custom Web & Mobile Solutions"
        description="Professional software development company in Pune specializing in custom web applications, mobile apps, enterprise solutions. Expert developers delivering scalable, innovative digital solutions for businesses worldwide."
        keywords="Software Development Company Pune, Custom Web Development India, Mobile App Development, Enterprise Software Solutions, React Development Services, Java Development Company, Software Consulting, Web Application Development, Digital Solutions Provider, Custom Software Development"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <Services />
      <Internship />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
