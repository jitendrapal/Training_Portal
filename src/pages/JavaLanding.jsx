import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";
import Testimonials from "../components/Testimonials";

const JavaLanding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Java Full Stack Development Course",
    description:
      "Practical Java Full Stack training in Wagholi, Pune, Maharashtra with Spring Boot, React, PostgreSQL, Docker, live projects, internship support, and placement coaching.",
    provider: {
      "@type": "Organization",
      name: "Neuro Edge Technologies",
      sameAs: "https://neuroedgetechnologies.com/",
    },
  };

  return (
    <div className="pt-24">
      <SEO
        title="Java Full Stack Course Wagholi Pune | Online & Offline Java Training"
        description="Java Full Stack training in Wagholi, Pune, Maharashtra — online and offline classes with Spring Boot, React, PostgreSQL, Docker, live projects, internship support, and placement coaching."
        keywords="Java Full Stack Course Wagholi, Java training Pune, Java course Maharashtra, online Java course, offline Java training Wagholi, Spring Boot training Pune, Java internship support"
        canonical="/java-full-stack"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-r from-sky-600 to-primary-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Java Full Stack Development in Wagholi Pune — Job-Ready in 6 Months
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Learn Spring Boot, REST APIs, React, PostgreSQL, Docker and build
            real projects with online/offline training options, internship
            support, and placement coaching in Pune, Maharashtra.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#enroll"
              className="inline-block bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95"
            >
              Get Free Career Call
            </a>
          </div>
        </div>
      </section>

      <section id="highlights" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Live Projects</h3>
              <p className="text-sm text-gray-600">
                Work on 3+ real-world projects
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Internship Support</h3>
              <p className="text-sm text-gray-600">
                Industry internships with mentor guidance
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Placement Coaching</h3>
              <p className="text-sm text-gray-600">
                Mock interviews, resume reviews, and job support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Curriculum Snapshot</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg border">
              Spring Boot & Backend APIs
            </div>
            <div className="p-6 bg-white rounded-lg border">
              React & Frontend
            </div>
            <div className="p-6 bg-white rounded-lg border">
              Databases, Docker & DevOps
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Enroll / Get a Free Career Call
          </h2>
          <EnrollmentForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default JavaLanding;
