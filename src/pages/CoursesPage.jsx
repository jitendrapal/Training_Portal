import React from "react";
import Courses from "../components/Courses";

const CoursesPage = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of full-stack development courses 
            designed to make you job-ready in the tech industry.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <Courses />

      {/* Additional Course Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                Our courses are designed with input from industry experts to ensure 
                you learn the most in-demand skills.
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
                Build real-world projects that you can showcase in your portfolio 
                and impress potential employers.
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
