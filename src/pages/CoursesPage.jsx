import React from "react";
import SEO from "../components/SEO";
import Courses from "../components/Courses";
import { coursesSchema } from "../utils/structuredData";

const CoursesPage = () => {
  return (
    <div className="pt-24">
      <SEO
        title="Full Stack Developer Courses | Java, Python, MERN Stack Training"
        description="Master Full Stack Development with our comprehensive courses in Java, Python, MERN Stack. Expert trainers, hands-on projects, 95% placement rate. Enroll now for best IT training in Pune, India."
        keywords="Java Full Stack Course, Python Full Stack Training, MERN Stack Bootcamp, React Node.js Course, Full Stack Developer Certification, Web Development Course Pune, Programming Training India, Software Development Bootcamp"
        canonical="/courses"
        structuredData={coursesSchema}
      />

      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full Stack Developer Courses
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Master modern web development with our comprehensive full-stack
            courses. Learn Java, Python, MERN Stack with hands-on projects and
            guaranteed placement support.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      {/* Additional Course Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Industry-Relevant Curriculum
              </h3>
              <p className="text-gray-600">
                Our courses are designed with input from industry experts to
                ensure you learn the most in-demand skills.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hands-on Projects
              </h3>
              <p className="text-gray-600">
                Build real-world projects that you can showcase in your
                portfolio and impress potential employers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Placement Support
              </h3>
              <p className="text-gray-600">
                Get dedicated placement assistance with resume building,
                interview preparation, and job referrals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
