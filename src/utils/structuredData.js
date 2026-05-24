// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://neuroedgetechnologies.com/#organization",
  name: "Neuro Edge Technologies",
  alternateName: "Neuro Edge Technologies Training Institute",
  url: "https://neuroedgetechnologies.com",
  logo: "https://neuroedgetechnologies.com/logo.png",
  description:
    "Leading software training institute offering career-focused IT courses, internship-supported programs, and placement-ready learning in Java, .NET, Python, SQL, Azure, AI, and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Street, Baner",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411045",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8055006652",
    contactType: "customer service",
    email: "info@neuroedgetechnologies.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/neuroedgetechnologies",
    "https://www.facebook.com/neuroedgetechnologies",
    "https://twitter.com/neuroedgetech",
    "https://www.instagram.com/neuroedgetech",
  ],
  foundingDate: "2020",
  numberOfEmployees: "50-100",
  slogan: "Powering Businesses Through Innovation",
  industry: "Software Training Institute",
  knowsAbout: [
    "Software Training",
    "IT Training",
    "Java Full Stack",
    ".NET Full Stack",
    "Python Full Stack",
    "SQL Database",
    "Azure Training",
    "AI Training",
    "Agentic AI",
    "AI Workshop",
    "Internship Support",
    "Placement Support",
    "IT Ausbildung",
    "Ausbildung in Germany",
    "Ausbildung for IT",
    "Ausbildung Support",
    "Vocational Training",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Software Development Services",
  description:
    "Professional software development and digital solution services",
  itemListElement: [
    {
      "@type": "Service",
      name: "Custom Web Application Development",
      description:
        "Professional web application development using modern technologies like React, Node.js, and cloud platforms",
      provider: {
        "@type": "Organization",
        name: "Neuro Edge Technologies",
      },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        category: "Professional Service",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Service",
      name: "Mobile App Development",
      description:
        "Native and cross-platform mobile application development for iOS and Android",
      provider: {
        "@type": "Organization",
        name: "Neuro Edge Technologies",
      },
      serviceType: "Mobile Development",
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        category: "Professional Service",
        priceCurrency: "INR",
      },
    },
    {
      "@type": "Service",
      name: "Enterprise Software Solutions",
      description:
        "Scalable enterprise software solutions with modern architecture and cloud deployment",
      provider: {
        "@type": "Organization",
        name: "Neuro Edge Technologies",
      },
      serviceType: "Enterprise Software",
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        category: "Professional Service",
        priceCurrency: "INR",
      },
    },
  ],
};

export const internshipSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Courses with Internship",
  description:
    "Professional courses that include internship placements and real-world software development projects with industry mentorship",
  provider: {
    "@type": "Organization",
    name: "Neuro Edge Technologies",
  },
  programType: "Course",
  timeToComplete: "P3M",
  occupationalCategory: "Software Development",
  offers: {
    "@type": "Offer",
    category: "Paid",
  },
  applicationDeadline: "2026-12-31",
  maximumEnrollment: 20,
};
