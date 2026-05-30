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
        description="Neuro Edge Technologies is the best IT training institute in Wagholi, Pune offering Full Stack Development, Python, Data Science, AI/ML, Cloud Computing, Cyber Security, Software Testing, and DevOps with live projects, expert mentorship, interview preparation, and placement assistance."
        keywords="IT Training Institute Wagholi, Best IT Institute in Wagholi, IT Training Institute in Wagholi Pune, Job Oriented IT Courses in Wagholi, Placement Assistance IT Training, IT Classes Near Me, Software Training Institute Wagholi, Python Training in Wagholi, Java Full Stack Course, MERN Stack Training, Full Stack Developer Course, Java Programming Classes, Web Development Course, AI Course in Wagholi, Artificial Intelligence Training, Machine Learning Course, Data Science Course Pune, Data Analytics Training, Power BI Course, AWS Training Wagholi, Azure Training Pune, DevOps Course, Cloud Computing Course, Kubernetes Training, Software Testing Course, Automation Testing Training, Selenium Training, Cyber Security Course, Ethical Hacking Course, Full Stack Development, Python + AI, Data Analytics, Cloud Computing, Software Testing, Job-Oriented Courses, Job Ready Training Programs, Internship Support, Placement Support"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Hero />
      <section className="py-12 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-3">
              Wagholi Course Pages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Explore local IT training pages for Wagholi students
            </h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Click the course page that matches your interest and discover
              batch dates, outcomes, and local enrollment support.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/python-training-wagholi"
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-primary-300 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-2">
                Python Training Wagholi
              </p>
              <p className="text-gray-200">
                Free career call, live Python projects, and placement support.
              </p>
            </a>
            <a
              href="/full-stack-course-wagholi"
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-secondary-300 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-secondary-300 mb-2">
                Full Stack Course Wagholi
              </p>
              <p className="text-gray-200">
                React + Node full stack training with internship and job prep.
              </p>
            </a>
            <a
              href="/ai-ml-course-wagholi"
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-primary-300 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-primary-300 mb-2">
                AI/ML Course Wagholi
              </p>
              <p className="text-gray-200">
                Learn AI, ML and data science with practical projects.
              </p>
            </a>
            <a
              href="/cyber-security-course-wagholi"
              className="block rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-emerald-300 hover:bg-white/10"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-2">
                Cyber Security Course Wagholi
              </p>
              <p className="text-gray-200">
                Ethical hacking and security training with Pune placement help.
              </p>
            </a>
          </div>
        </div>
      </section>
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
      <Testimonials />
      <Courses />
      <Services />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
