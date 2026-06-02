import React from "react";
import SEO from "../components/SEO";
import EnrollmentForm from "../components/EnrollmentForm";
import Testimonials from "../components/Testimonials";

const CyberSecurityLanding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Cyber Security Course",
    description:
      "Cyber Security training in Pune and Maharashtra with ethical hacking, network security, penetration testing, incident response, and placement support.",
    provider: {
      "@type": "Organization",
      name: "Neuro Edge Technologies",
      sameAs: "https://neuroedgetechnologies.com/",
    },
  };

  return (
    <div className="pt-24">
      <SEO
        title="Cyber Security Course Pune | Ethical Hacking & Network Security"
        description="Cyber Security training in Pune and Maharashtra with online/offline classes, ethical hacking, penetration testing, network defense, incident response, and placement assistance."
        keywords="Cyber Security Course Pune, Ethical Hacking Training, Network Security Course, Penetration Testing Course, Cyber Security Workshop Pune, Online Cyber Security Training, Offline Cyber Security Course, Security Internship Pune"
        canonical="/cyber-security-course"
        structuredData={structuredData}
      />

      <section className="bg-gradient-to-r from-slate-900 to-emerald-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cyber Security Course Pune — Online & Offline Training
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Learn ethical hacking, penetration testing, network defense, and
            incident response with practical labs, career support, and
            placement-ready training.
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
              View Course Highlights
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
                Master vulnerability assessment, exploitation, and penetration
                testing.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Network Security</h3>
              <p className="text-sm text-gray-600">
                Secure networks with firewall setups, IDS/IPS, and secure
                architecture.
              </p>
            </div>
            <div className="p-6 border rounded-lg text-center">
              <h3 className="font-semibold mb-2">Job Preparation</h3>
              <p className="text-sm text-gray-600">
                Get interview prep, resume guidance, CTF practice, and placement
                support.
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
                What You Will Learn
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  ✔ Ethical hacking, penetration testing, and web security
                </li>
                <li>✔ Network defense, Wireshark, firewalls, and IDS/IPS</li>
                <li>
                  ✔ Incident response, digital forensics, and log analysis
                </li>
                <li>✔ Security automation with Python and Kali Linux tools</li>
                <li>✔ Placement support for Pune cyber security roles</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Course Details</h3>
              <p className="mb-3">Duration: 6 Months</p>
              <p className="mb-3">Mode: Online + Offline (Pune/Wagholi)</p>
              <p className="mb-3">Schedule: Weekend + Evening Batches</p>
              <p className="mb-3">Projects: Labs, CTFs, security assessments</p>
              <p className="text-sm text-gray-600">
                Designed for learners who want cyber security training with real
                labs and placement coaching in Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="enroll" className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Secure Your Seat</h2>
          <p className="text-gray-600 mb-6">
            Fill the form below to book your batch and receive a free career
            consultation for cyber security.
          </p>
          <EnrollmentForm />
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default CyberSecurityLanding;
