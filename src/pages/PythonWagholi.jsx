import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";
import Testimonials from "../components/Testimonials";
import { getNextBatchDate } from "../utils/batchDates";

const PythonWagholi = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Python Training Wagholi",
    description:
      "Python training in Wagholi with live projects, internship support, placement coaching, and practical full-stack development experience.",
    provider: {
      "@type": "Organization",
      name: "Neuro Edge Technologies",
      sameAs: "https://neuroedgetechnologies.com/",
    },
  };

  const batchDates = ["2026-06-10", "2026-08-05", "2026-10-01"];
  const nextBatch = getNextBatchDate(batchDates);

  return (
    <div className="pt-24">
      <SEO
        title="Python Training Wagholi | Career-Focused IT Course"
        description="Join Neuro Edge Technologies for Python Training in Wagholi with live project learning, internship support, placement assistance, and a batch starting soon."
        keywords="Python Training in Wagholi, IT Classes Near Me, Best IT Institute Near Wagholi, Python course Pune, Data Science training, AI training, full stack Python, internship support, placement assistance"
        canonical="/python-training-wagholi"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-r from-sky-700 to-cyan-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Python Training Wagholi — Batch Starts {nextBatch || "Soon"}
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Learn Python programming, web development, data science, and
            AI-ready skills with practical projects, internship support, and
            placement coaching in Wagholi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#enroll"
              className="inline-block bg-white text-sky-700 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95"
            >
              Book a Free Career Call
            </a>
            <a
              href="#course-highlights"
              className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-sky-700 transition"
            >
              View Course Highlights
            </a>
          </div>
        </div>
      </section>

      <section id="course-highlights" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Live Python Projects</h3>
              <p className="text-sm text-gray-600">
                Build real applications with Django, Flask, and REST APIs.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Internship + Placement</h3>
              <p className="text-sm text-gray-600">
                Internship support plus resume and interview preparation.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Career Outcomes</h3>
              <p className="text-sm text-gray-600">
                Python developer, data analyst, full stack developer roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What You Learn in Python Training Wagholi
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Python fundamentals and advanced programming</li>
                <li>✔ Django, Flask, REST APIs, and backend development</li>
                <li>✔ Data science essentials with Pandas and NumPy</li>
                <li>✔ AI-ready project work and full-stack deployment</li>
                <li>
                  ✔ Placement support for Pune and Wagholi job opportunities
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Batch Details</h3>
              <p className="mb-3">Start Date: {nextBatch || "Starting Soon"}</p>
              <p className="mb-3">Duration: 6 Months</p>
              <p className="mb-3">Schedule: Weekdays/Weekends</p>
              <p className="mb-3">Mode: Hybrid (Wagholi + Online)</p>
              <p className="text-sm text-slate-300">
                Join one of the best IT institutes near Wagholi for hands-on
                Python training and career-focused outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Reserve Your Seat</h2>
          <p className="text-gray-600 mb-6">
            Secure your spot in the next Wagholi batch and get personalised
            career guidance for Python and AI roles.
          </p>
          <EnrollmentForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default PythonWagholi;
