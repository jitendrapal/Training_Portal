// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://neuroedgetechnologies.com/#organization",
  name: "Neuro Edge Technologies",
  alternateName: "Neuro Edge Technologies Software Development Company",
  url: "https://neuroedgetechnologies.com",
  logo: "https://neuroedgetechnologies.com/logo.png",
  description:
    "Leading software development company specializing in custom web applications, mobile apps, enterprise solutions, and digital transformation services.",
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
    "https://www.instagram.com/neuroedgetechnologies",
  ],
  foundingDate: "2020",
  numberOfEmployees: "50-100",
  slogan: "Powering Businesses Through Innovation",
  industry: "Software Development",
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "Enterprise Software",
    "Cloud Solutions",
    "Digital Transformation",
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
  "@type": "WorkBasedProgram",
  name: "Software Development Internship Program",
  description:
    "Professional internship program with real-world software development projects and industry mentorship",
  provider: {
    "@type": "Organization",
    name: "Neuro Edge Technologies",
  },
  programType: "Internship",
  timeToComplete: "P3M",
  occupationalCategory: "Software Development",
  offers: {
    "@type": "Offer",
    category: "Paid",
  },
  applicationDeadline: "2026-12-31",
  maximumEnrollment: 20,
};
