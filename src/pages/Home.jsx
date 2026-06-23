import React from "react";
import { Link } from "react-router-dom";
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
        title="Job-Oriented Courses | Best Software Training Institute in Wagholi Pune"
        description="Neuro Edge Technologies is the best software training institute in Wagholi and Pune offering Full Stack Development, Python, Data Science, AI/ML, Cloud Computing, Cyber Security, Software Testing, and DevOps with live projects, expert mentorship, interview preparation, and placement assistance."
        keywords="Software Training Institute Wagholi, Software Training Institute in Wagholi, Software Training Institute Pune, Software Training Institute in Pune, IT Training Institute Wagholi, Best IT Institute in Wagholi, IT Training Institute in Wagholi Pune, Job Oriented IT Courses in Wagholi, Placement Assistance IT Training, IT Classes Near Me, Software Training Institute Wagholi, Python Training in Wagholi, Java Full Stack Course, MERN Stack Training, Full Stack Developer Course, Java Programming Classes, Web Development Course, AI Course in Wagholi, Artificial Intelligence Training, Machine Learning Course, Data Science Course Pune, Data Analytics Training, Power BI Course, AWS Training Wagholi, Azure Training Pune, DevOps Course, Cloud Computing Course, Kubernetes Training, Software Testing Course, Automation Testing Training, Selenium Training, Cyber Security Course, Ethical Hacking Course, Full Stack Development, Python + AI, Data Analytics, Cloud Computing, Software Testing, Job-Oriented Courses, Job Ready Training Programs, Internship Support, Placement Support"
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-3">
              Software Training Institute in Wagholi & Pune
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              The leading software training institute near Wagholi and Pune
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer online and offline software training in Wagholi and Pune
              for Java, Python, Cyber Security, Data Science, Cloud, and full
              stack careers.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">Local Training</h3>
              <p className="text-sm text-gray-600">
                Hybrid and in-person training near Wagholi with Pune placement
                support.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">Industry Projects</h3>
              <p className="text-sm text-gray-600">
                Hands-on software projects, internship-ready work, and live
                mentoring.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">Career Support</h3>
              <p className="text-sm text-gray-600">
                Resume prep, interview coaching, and placement assistance for
                Pune jobs.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 text-center">
              <h3 className="font-semibold text-lg mb-3">Trusted Institute</h3>
              <p className="text-sm text-gray-600">
                Recognized as a top software training institute in Wagholi and
                Pune.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="inline-block rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-primary-700"
            >
              View Courses
            </Link>
            <Link
              to="/contact"
              className="inline-block rounded-full border border-primary-600 px-8 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-primary-900 via-slate-950 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl flex flex-col h-full">
              <span className="inline-flex w-fit rounded-full bg-primary-500/20 px-4 py-1 text-sm font-semibold text-primary-100 mb-4">
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

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex rounded-full bg-secondary-500/20 px-4 py-1 text-sm font-semibold text-secondary-100">
                  GERMANY EDUCATION & PLACEMENT SUPPORT
                </span>
                <span className="flex items-center text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded">
                  ⭐ Top Consultants in Pune
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Ausbildung & Higher Education in Germany
              </h2>
              <p className="text-slate-300 mb-4">
                Looking for Germany jobs or Ausbildung from India? We provide
                expert, end-to-end guidance for applying to Bachelor's and
                Master's programs, vocational Ausbildung pathways, and direct IT
                placements.
              </p>
              <p className="text-sm font-semibold text-secondary-100 mb-4">
                Partnered strategically with Europe Jobs Consultancy for
                unmatched European placement support.
              </p>
              <ul className="space-y-3 text-slate-300 mb-8 flex-grow">
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
              <Link
                to="/germany-placement"
                className="inline-block text-center w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                View Germany Programs & Apply
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Seminars Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500 mb-3">
              Community Outreach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seminars We've Conducted
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We actively conduct seminars across Maharashtra to guide students
              and professionals towards the right career path in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Seminar 1 - Nagpur */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/seminar_1.jpeg"
                  alt="Neuro Edge Technologies Seminar in Nagpur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  📍 Nagpur
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Career in Tech — Nagpur Seminar
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Guided aspiring IT professionals in Nagpur on career paths in
                  software development, AI/ML, and placement opportunities.
                </p>
              </div>
            </div>

            {/* Seminar 2 - Pune */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/seminar_2.jpeg"
                  alt="Neuro Edge Technologies Seminar in Pune"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-secondary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  📍 Pune
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Tech Skills & Placement — Pune Seminar
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Conducted an interactive session in Pune on modern tech
                  skills, live project training, and how to crack placements in
                  top IT companies.
                </p>
              </div>
            </div>

            {/* Seminar 3 - Pune */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/seminar_3.jpeg"
                  alt="Neuro Edge Technologies Seminar in Pune"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-secondary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  📍 Pune
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Full Stack Development — Pune Seminar
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Delivered a hands-on seminar on Full Stack Development
                  covering React, Node.js, and real-world project building to
                  help students become job-ready developers.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-primary-100 rounded-full px-6 py-3 shadow-sm">
              <span className="text-2xl">🎓</span>
              <p className="text-sm font-semibold text-gray-700">
                Trusted by students across Maharashtra — Nagpur, Pune & beyond
              </p>
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
