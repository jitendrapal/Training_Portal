import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";
import Testimonials from "../components/Testimonials";

const CyberSecurityWagholi = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Cyber Security Course Wagholi",
    description:
      "Cyber security training in Wagholi with ethical hacking, network security, penetration testing, and placement support for IT security roles.",
    provider: {
      "@type": "Organization",
      name: "Neuro Edge Technologies",
      sameAs: "https://neuroedgetechnologies.com/",
    },
  };

  return (
    <div className="pt-24">
      <SEO
        title="Cyber Security Course Wagholi | Ethical Hacking Training"
        description="Join our Cyber Security Course in Wagholi to learn ethical hacking, penetration testing, network security, and prepare for security careers with placement assistance."
        keywords="Cyber Security Course Wagholi, Ethical Hacking Course, Cyber Security training Pune, Best IT Institute Near Wagholi, IT Classes Near Me, network security course, penetration testing course"
        canonical="/cyber-security-course-wagholi"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-r from-slate-900 to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cyber Security Course Wagholi — Batch Starts June 18
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Secure your IT future with cyber security training near Wagholi.
            Learn ethical hacking, penetration testing, and network defence with
            placement-backed support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#enroll"
              className="inline-block bg-white text-slate-900 font-semibold px-6 py-3 rounded-lg shadow hover:opacity-95"
            >
              Book a Free Security Consultation
            </a>
            <a
              href="#course-highlights"
              className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-slate-900 transition"
            >
              View Security Modules
            </a>
          </div>
        </div>
      </section>

      <section id="course-highlights" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Ethical Hacking</h3>
              <p className="text-sm text-gray-600">
                Learn penetration testing, vulnerability scanning and exploit
                validation.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Network Security</h3>
              <p className="text-sm text-gray-600">
                Secure networks using firewalls, IDS/IPS, and monitoring tools.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Job Preparation</h3>
              <p className="text-sm text-gray-600">
                Resume, interview prep, and support for security job roles.
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
                Course Outcomes
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Master ethical hacking & penetration testing tools</li>
                <li>✔ Learn network, system, and application security</li>
                <li>✔ Build a security portfolio with capture-the-flag labs</li>
                <li>✔ Prepare for security certifications and interviews</li>
                <li>✔ Get placement support for cyber security roles</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Batch Details</h3>
              <p className="mb-3">Start Date: June 18</p>
              <p className="mb-3">Duration: 6 Months</p>
              <p className="mb-3">Schedule: Weekend + Evening Classes</p>
              <p className="mb-3">Mode: Hybrid (Wagholi + Online)</p>
              <p className="text-sm text-gray-600">
                Designed for learners looking for cyber security training near
                Wagholi and placements in Pune IT firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Secure Your Seat</h2>
          <p className="text-gray-600 mb-6">
            Fill the form below to book your batch seat and get a free security
            career consultation.
          </p>
          <EnrollmentForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default CyberSecurityWagholi;
