import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";
import Testimonials from "../components/Testimonials";

const AIMLWagholi = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI/ML Course Wagholi",
    description:
      "AI and Machine Learning training in Wagholi with hands-on projects, internship support, and placement coaching for intelligent applications.",
    provider: {
      "@type": "Organization",
      name: "Neuro Edge Technologies",
      sameAs: "https://neuroedgetechnologies.com/",
    },
  };

  return (
    <div className="pt-24">
      <SEO
        title="AI/ML Course Wagholi | Data Science & Machine Learning Training"
        description="Study AI and Machine Learning in Wagholi with Neuro Edge Technologies. Learn Python, TensorFlow, scikit-learn and build intelligent solutions with internship and placement support."
        keywords="AI Course in Wagholi, Machine Learning Course, Data Science Course Pune, AI training Wagholi, ML internship, Best IT Institute Near Wagholi, IT Classes Near Me"
        canonical="/ai-ml-course-wagholi"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-r from-indigo-700 to-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI/ML Course Wagholi — Batch Starts June 15
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Gain practical AI and Machine Learning skills in Wagholi with real
            data projects, model deployment, internship mentorship, and job
            readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#enroll"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95"
            >
              Reserve Your Free Call
            </a>
            <a
              href="#course-highlights"
              className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition"
            >
              Explore AI Outcomes
            </a>
          </div>
        </div>
      </section>

      <section id="course-highlights" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">AI Project Learning</h3>
              <p className="text-sm text-gray-600">
                Build models, pipelines, and intelligent applications.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Industry Internship</h3>
              <p className="text-sm text-gray-600">
                Work on real AI tasks while preparing for data science roles.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Job-Ready Skills</h3>
              <p className="text-sm text-gray-600">
                Learn deployment, analytics, and interview-ready AI techniques.
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
                What You Will Achieve
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  ✔ Build AI models with Python, scikit-learn and TensorFlow
                </li>
                <li>
                  ✔ Develop real-world ML applications for business use cases
                </li>
                <li>
                  ✔ Learn data preparation, feature engineering, and model
                  tuning
                </li>
                <li>✔ Deploy models and work on AI-driven solutions</li>
                <li>
                  ✔ Get interview and placement support for AI roles in Pune
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Batch Details</h3>
              <p className="mb-3">Start Date: June 15</p>
              <p className="mb-3">Duration: 6 Months</p>
              <p className="mb-3">Schedule: Weekend + Evening Batches</p>
              <p className="mb-3">Mode: Hybrid (Wagholi + Online)</p>
              <p className="text-sm text-gray-600">
                Perfect for learners looking for AI/ML training near Wagholi and
                students ready to build a data-driven career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Enroll in AI/ML Training</h2>
          <p className="text-gray-600 mb-6">
            Book your free consultation and start the next batch for AI and
            machine learning training in Wagholi.
          </p>
          <EnrollmentForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default AIMLWagholi;
