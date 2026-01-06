import React from "react";
import SEO from "../components/SEO";
import FreeResources from "../components/FreeResources";

const ResourcesPage = () => {
  const resourcesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Programming Resources & Tutorials",
    "description": "Access free programming tutorials, guides, and resources for Java, Python, React, Node.js, and more. Learn coding with comprehensive tutorials and examples.",
    "url": "https://neuroedgetechnologies.com/resources",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Programming Tutorials",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Java Tutorial",
          "description": "Complete Java programming tutorial with examples",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Neuro Edge Technologies"
          }
        },
        {
          "@type": "Course",
          "name": "Python Tutorial",
          "description": "Learn Python programming from basics to advanced",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Neuro Edge Technologies"
          }
        },
        {
          "@type": "Course",
          "name": "React Tutorial",
          "description": "Master React.js with hands-on examples and projects",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Neuro Edge Technologies"
          }
        }
      ]
    }
  };

  return (
    <div className="pt-24">
      <SEO
        title="Free Programming Resources & Tutorials | Java, Python, React"
        description="Access free programming tutorials and resources for Java, Python, React, Node.js, HTML, CSS, JavaScript. Learn coding with comprehensive guides, examples, and practice exercises."
        keywords="Free Programming Tutorials, Java Tutorial, Python Tutorial, React Tutorial, JavaScript Tutorial, HTML CSS Tutorial, Node.js Tutorial, Free Coding Resources, Programming Examples"
        canonical="/resources"
        structuredData={resourcesStructuredData}
      />
      
      {/* Page Header */}
      <section className="py-12 bg-gradient-to-r from-accent-800 via-primary-700 to-secondary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Free Programming Resources
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Master programming with our comprehensive collection of free tutorials, guides, and resources. 
            Learn Java, Python, React, Node.js, and more with hands-on examples and practical projects.
          </p>
        </div>
      </section>

      {/* Free Resources Section */}
      <FreeResources />
    </div>
  );
};

export default ResourcesPage;
