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
        description="Job-oriented courses and the best institute in Wagholi Pune for IT training, internship support, placement preparation, Ausbildung for IT and other branches, and live project learning in Java, .NET, Python, SQL, Azure, and AI."
        keywords="Job-Oriented Courses, Best Institute in Wagholi Pune, job ready course, Job Placement Support, Job Assistance, Job Oriented Course, Job Ready Training Programs, IT Training Institute, Java Full Stack Course, .NET Full Stack Course, Python Full Stack Course, SQL Database Course, Azure Training, AI Training, Agentic AI, AI Workshop, Internship Support, Placement Support, Ausbildung, IT Ausbildung, Ausbildung in Germany"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <section className="py-12 bg-gradient-to-r from-primary-900 via-slate-950 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <span className="inline-flex rounded-full bg-primary-500/20 px-4 py-1 text-sm font-semibold text-primary-100 mb-4">
                LIMITED SEATS AVAILABLE
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Next batch starts soon
              </h2>
              <p className="text-slate-300 mb-4">
                Reserve your seat now for our job-oriented courses in Wagholi
                Pune. Batch sizes are intentionally small to ensure hands-on
                support, live project mentorship, and placement-ready training.
              </p>
              <p className="font-semibold text-primary-200">
                Join before the next batch fills up and get a stronger edge in
                your IT career.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl">
              <span className="inline-flex rounded-full bg-secondary-500/20 px-4 py-1 text-sm font-semibold text-secondary-100 mb-4">
                GERMANY EDUCATION & PLACEMENT SUPPORT
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Ausbildung & Higher Education in Germany
              </h2>
              <p className="text-slate-300 mb-4">
                We provide full guidance and support for applying to Bachelor's
                and Master's programs, as well as vocational Ausbildung pathways
                and placement opportunities in Germany.
              </p>
              <p className="text-sm font-semibold text-secondary-100 mb-4">
                Partnered with Europe Jobs Consultancy for stronger European
                placement support.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li>
                  ✔ Full support for Bachelor's & Master's higher education
                  programs
                </li>
                <li>
                  ✔ Support for Germany placement and Ausbildung vocational
                  training
                </li>
                <li>✔ Career mentorship and university application guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
