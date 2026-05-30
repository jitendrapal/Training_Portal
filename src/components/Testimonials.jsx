import React from "react";

// Stats removed — testimonials-only display as requested

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const testimonials = [
  {
    name: "Vikas Shedole",
    quote:
      "I attended the demo session and had a great experience. The trainer explained concepts from scratch in a very simple and structured way, making it suitable even for someone with zero coding knowledge.",
  },
  {
    name: "Devendra",
    quote:
      "Neuro Edge Technologies makes tech training easy and practical. Their programs bridge learning and doing with live projects and internships.",
  },
  {
    name: "Anuj Kumar",
    quote:
      "As a Java intern on a live project, I gained real backend experience and mentor guidance that boosted my confidence.",
  },
  {
    name: "Harshad Shelke",
    quote:
      "Working on Python live projects helped me apply theory to real code and improved my debugging skills.",
  },
  {
    name: "Aniket Girigoud",
    quote:
      "Building the frontend with React gave me hands-on UI experience and real component-driven development practice.",
  },
  {
    name: "Yuvraj Sathe",
    quote:
      "Node.js backend tasks during my internship taught me API development, deployment basics, and collaborative workflows.",
  },
  {
    name: "Pranali Dehelikar",
    quote:
      "The live project taught me how frontend and backend integrate; the internship made me job-ready.",
  },
];

// successStories removed per request

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50" id="social-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 font-semibold mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Students and interns who trained, worked, and joined companies
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            See how our recent learners turned training into internships,
            full-time jobs, and career growth with our supported placement
            workflow.
          </p>
        </div>

        {/* placement stats removed; only student reviews are shown */}

        <div className="mb-12">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl bg-white p-6 shadow-md border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <header className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-500">Student / Intern</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </header>

                <blockquote className="text-gray-700 italic leading-relaxed">
                  “{item.quote}”
                </blockquote>
              </article>
            ))}
          </div>
        </div>

        {/* success stories removed */}
      </div>
    </section>
  );
};

export default Testimonials;
