import React from "react";
import SEO from "../components/SEO";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import { internshipSchema } from "../utils/structuredData";

const CoursesPage = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Career-Focused IT Training Programs | Full Stack & Job-Ready Courses"
        description="Explore our career-focused IT training programs with internship support, live project learning, placement preparation, and in-demand courses like Full Stack Development, Python, Data Science, AI/ML, Cloud Computing, Cyber Security, Software Testing, and DevOps."
        keywords="IT Training Institute Wagholi, Best IT Institute in Wagholi, IT Training Institute in Wagholi Pune, Job Oriented IT Courses in Wagholi, Placement Assistance IT Training, Software Training Institute Wagholi, Python Training in Wagholi, Java Full Stack Course, MERN Stack Training, Full Stack Developer Course, Web Development Course, AI Course in Wagholi, Machine Learning Course, Data Science Course Pune, Cloud Computing Course, DevOps Course, Cyber Security Course, Software Testing Course, Job-Oriented Courses, Job Ready Course, Job Placement Support, Internship Support, Placement Preparation"
        canonical="/courses"
        structuredData={internshipSchema}
      />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Career-Ready Training Programs
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore our career-focused training programs with internship
            support, industry-aligned projects, and placement preparation to
            accelerate your career growth.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      <Testimonials />

      {/* Additional Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎯 What Makes Our Training Programs Special?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Industry Exposure
              </h3>
              <p className="text-gray-600">
                Work directly with industry professionals and understand
                real-world business requirements and project workflows.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Skill Development
              </h3>
              <p className="text-gray-600">
                Enhance your technical and soft skills through practical
                projects, code reviews, and professional development sessions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Networking Opportunities
              </h3>
              <p className="text-gray-600">
                Build valuable connections with industry professionals, mentors,
                and fellow interns that can benefit your future career.
              </p>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📋 Eligibility Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Academic Requirements:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Final year student (BE/BTech/MCA/MSc)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Minimum 60% aggregate marks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Computer Science/IT/Related field
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    No active backlogs
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Technical Requirements:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Basic programming knowledge
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Understanding of software development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Willingness to learn new technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    Good communication skills
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Process */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              📝 Application Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Apply Online</h4>
                <p className="text-primary-100 text-sm">
                  Fill the application form with your details
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Technical Test</h4>
                <p className="text-primary-100 text-sm">
                  Complete online technical assessment
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Interview</h4>
                <p className="text-primary-100 text-sm">
                  Technical and HR interview rounds
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">
                  Start Course & Internship
                </h4>
                <p className="text-primary-100 text-sm">
                  Begin your learning journey with practical internship
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
