import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";
import Testimonials from "../components/Testimonials";
import { getNextBatchDate } from "../utils/batchDates";

const FullStackWagholi = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Full Stack Course Wagholi",
    description:
      "Full stack development training in Wagholi with JavaScript, React, Node, and internship support for job-ready outcomes.",
    provider: {
      "@type": "Organization",
      name: "Neuro Edge Technologies",
      sameAs: "https://neuroedgetechnologies.com/",
    },
  };

  const batchDates = ["2026-06-12", "2026-08-20", "2026-11-01"];
  const nextBatch = getNextBatchDate(batchDates);

  return (
    <div className="pt-24">
      <SEO
        title="Full Stack Course Wagholi | Job-Ready Development Training"
        description="Join the Full Stack Course in Wagholi at Neuro Edge Technologies. Learn front-end, back-end, database, and deployment with live projects, internships, and placement support."
        keywords="Full Stack Course Wagholi, Best IT Institute Near Wagholi, IT Classes Near Me, Full Stack Development Pune, React course Wagholi, Node.js training, web development course"
        canonical="/full-stack-course-wagholi"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-r from-purple-700 to-fuchsia-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Full Stack Course Wagholi — Next Batch Starts {nextBatch || "Soon"}
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Become a job-ready full stack developer with React, Node.js,
            Express, MongoDB, and deployment skills taught through local Wagholi
            classes and online support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#enroll"
              className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95"
            >
              Reserve Your Seat
            </a>
            <a
              href="#course-highlights"
              className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition"
            >
              See Course Outcomes
            </a>
          </div>
        </div>
      </section>

      <section id="course-highlights" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Full Stack Mastery</h3>
              <p className="text-sm text-gray-600">
                Learn both front-end and back-end development with a career
                focus.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Live Project Portfolio</h3>
              <p className="text-sm text-gray-600">
                Build 3+ production-ready web applications for your resume.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Placement Assistance</h3>
              <p className="text-sm text-gray-600">
                Interview prep, resume support, and job referral guidance.
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
                Why Choose Our Full Stack Course in Wagholi
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Practical React + Node.js projects</li>
                <li>✔ MongoDB and cloud deployment experience</li>
                <li>✔ Internship with real industry feedback</li>
                <li>
                  ✔ Live classes near Wagholi with weekday and weekend batches
                </li>
                <li>✔ Career-oriented training for Pune job market</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Batch Details</h3>
              <p className="mb-3">Start Date: {nextBatch || "Starting Soon"}</p>
              <p className="mb-3">Duration: 6 Months</p>
              <p className="mb-3">Schedule: Evening and Weekend Batches</p>
              <p className="mb-3">Mode: Hybrid / Online</p>
              <p className="text-sm text-gray-600">
                Ideal for learners in Wagholi and nearby Pune localities seeking
                hands-on full stack development training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Enroll in the Wagholi Batch
          </h2>
          <p className="text-gray-600 mb-6">
            Join our next batch and build a strong full stack portfolio with
            interview-ready skills.
          </p>
          <EnrollmentForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default FullStackWagholi;
