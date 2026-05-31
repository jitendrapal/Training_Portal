import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const GermanyAusbildungPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO
        title="Germany Ausbildung & IT Jobs Placement Consultants in Pune, India"
        description="Looking for Germany jobs, Ausbildung, or higher education from India? Neuro Edge Technologies in Pune offers expert European placement and study abroad support."
        keywords="Germany jobs from India, Ausbildung consultants in Pune, IT jobs in Germany for Indians, Germany Placement Support Pune, Europe Jobs Consultancy India, Study in Germany consultants Pune, Vocational Training Germany apply from India, Master's in Germany from India, Ausbildung IT branches Pune, Germany work visa assistance India, apply for Ausbildung from India"
        canonical="/germany-placement"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-500 text-sm font-semibold mb-6">
            EUROPE JOBS CONSULTANCY PARTNERSHIP
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Pathway to Germany from India
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-10">
            Top-rated consultants in Pune providing dedicated support for
            Ausbildung vocational training, Bachelor's & Master's programs, and
            direct IT job placements in Germany for Indian talent.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/enroll"
              state={{ selectedService: "Higher Education in Germany" }}
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-8 rounded-full transition-colors"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ausbildung */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ausbildung (Vocational Training)
              </h3>
              <p className="text-gray-600 mb-6">
                Earn while you learn. We guide you through the process of
                securing an Ausbildung position in Germany's dual vocational
                training system, specially tailored for IT and technical
                branches.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Interview preparation for German employers
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  CV and Cover Letter adaptation
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Contract guidance and visa assistance
                </li>
              </ul>
            </div>

            {/* Higher Education */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Higher Education
              </h3>
              <p className="text-gray-600 mb-6">
                Comprehensive support for applying to public and private
                universities in Germany for Bachelor's and Master's degree
                programs in Software Engineering, CS, and more.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  University selection and shortlisting
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Application document review (SOP, LOR)
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Blocked account and accommodation help
                </li>
              </ul>
            </div>

            {/* Job Placement */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Direct Job Placement
              </h3>
              <p className="text-gray-600 mb-6">
                For experienced professionals. Leverage our partnership with
                Europe Jobs Consultancy to find direct IT placement
                opportunities across Germany and the broader EU market.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Direct connection with European recruiters
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Blue Card & Work Visa assistance
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-500 mr-2">✓</span>
                  Skill alignment to European standards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Leading Germany Placement Consultants in Pune, India
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Based in Pune, and partnered strategically with{" "}
            <strong>Europe Jobs Consultancy</strong>, we are the most trusted
            agency bridging the gap between Indian tech talent and European
            opportunities. Whether you are in Pune or anywhere across India, we
            provide end-to-end guidance from local skill development to your
            first day in Germany.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-primary-900 mb-2">
                Expert Consultants
              </h4>
              <p className="text-gray-600 text-sm">
                Our advisors have deep knowledge of the German education system
                and job market requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold text-primary-900 mb-2">
                Technical Preparation
              </h4>
              <p className="text-gray-600 text-sm">
                We don't just process papers; we train you to meet European
                technical coding standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GermanyAusbildungPage;
