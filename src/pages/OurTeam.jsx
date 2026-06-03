import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const OurTeam = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Our Team | Neuro Edge Technologies"
        description="Meet the Neuro Edge Technologies team of expert trainers and mentors delivering Java, Python, AI/ML, Cyber Security, and full-stack training in Pune."
        keywords="Our Team, Neuro Edge Technologies Trainers, Java Trainer Pune, AI ML Trainer Pune, Software Training Experts, IT Training Team"
        canonical="/about/team"
      />

      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-200 mb-3">
            Our Team
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the Trainers Driving Your Career Growth
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-100">
            Our trainers combine industry experience, hands-on project guidance,
            and career coaching to help you launch in Java, Python, AI, and
            security roles.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-primary-800 px-8 py-3 font-semibold shadow-lg hover:bg-slate-100"
          >
            Back to About Page
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 mb-10">
            <div className="rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 py-8 flex justify-center border-b border-gray-200">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
                  <img
                    src="/images/Dinesh_Sripathi_JavaTrainer.JPG"
                    alt="Dinesh Sripathi - Java FullStack Trainer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center bg-white flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Dinesh Sripathi
                </h2>
                <p className="text-primary-600 font-semibold mb-4">
                  Java FullStack Trainer
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dinesh Sripathi brings deep expertise in Java full-stack
                  development, Spring Boot, React, and practical enterprise
                  application delivery. He mentors students through real project
                  builds and placement-ready preparation.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 py-8 flex justify-center border-b border-gray-200">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
                  <img
                    src="/images/Ganesh_Jamadar_Python_AI_ML_Trainer.jpg"
                    alt="Ganesh Jamadar - Python AI ML Trainer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 text-center bg-white flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Ganesh Jamadar
                </h2>
                <p className="text-primary-600 font-semibold mb-4">
                  Python & AI/ML Trainer
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ganesh Jamadar specializes in Python, AI, machine learning,
                  and agentic AI systems. He teaches real-world solutions and
                  helps learners turn data science skills into career-ready
                  projects.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              <div className="bg-primary-50 py-8 flex justify-center border-b border-gray-200">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
                  <img
                    src="/images/Lokesh.jpg"
                    alt="Lokesh K Shahu - HR Head"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="p-6 text-center bg-white flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Lokesh K Shahu
                </h2>
                <p className="text-primary-600 font-semibold mb-4">HR Head</p>
                <p className="text-gray-600 leading-relaxed">
                  Lokesh oversees our human resources and talent acquisition
                  strategies. He works closely with top tech companies to ensure
                  our students have the best placement opportunities and career
                  growth.
                </p>
              </div>
            </div>

            {/* Team Member Box */}
            <div className="rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
              {/* Photo Box */}
              <div className="bg-primary-50 py-8 flex justify-center border-b border-gray-200">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
                  <img
                    src="/images/Rajni.png"
                    alt="Rajni Rathor - Technical Counselor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 text-center bg-white flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Rajni Rathor
                </h2>
                <p className="text-primary-600 font-semibold mb-4">
                  Technical Counselor
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Rajni is our dedicated student counselor, helping learners
                  navigate their career paths and choose the right training
                  programs. She provides continuous support from enrollment to
                  placement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
