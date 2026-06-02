import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import directorImage from "../assets/neuro_director.png";

const OurTeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Satish P.",
      role: "Founder & CEO",
      image: directorImage,
      bio: "Visionary leader with 10+ years of experience in software development and technical education. Passionate about bridging the gap between industry needs and emerging talent.",
      linkedin: "https://www.linkedin.com/company/neuro-edge-technologies",
    },
    {
      id: 2,
      name: "Expert Development Team",
      role: "Software Engineers & Architects",
      image: "/logo.png",
      bio: "Our core team of dedicated professionals who build scalable enterprise applications and mentor our interns through hands-on live project training.",
      linkedin: "https://www.linkedin.com/company/neuro-edge-technologies",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <SEO
        title="Our Team | Neuro Edge Technologies"
        description="Meet the expert team behind Neuro Edge Technologies. Discover the professionals dedicated to delivering top-notch software solutions and career-focused training."
        keywords="Neuro Edge Technologies team, Software developers Pune, IT experts Pune, Neuro Edge founders, Tech team Pune"
        canonical="/our-team"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            The dedicated professionals driving innovation, building robust software solutions, and empowering the next generation of developers.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden flex flex-col"
              >
                {/* Photo centered in box */}
                <div className="bg-gray-50 flex items-center justify-center py-10 border-b border-gray-100">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 flex-grow">{member.bio}</p>
                  
                  <div className="mt-auto">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                      title={`Connect with ${member.name} on LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you passionate about technology and looking to make an impact? We are always on the lookout for talented developers and trainers.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
