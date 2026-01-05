// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Neuro Edge Technologies",
  "alternateName": "Neuro Edge Technologies Training Institute",
  "url": "https://neuroedgetechnologies.com",
  "logo": "https://neuroedgetechnologies.com/logo.png",
  "description": "Leading IT Training Institute specializing in Full Stack Development, Java, React, Python, and AI/ML courses with 95% placement rate.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Street, Baner",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411045",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8055006652",
    "contactType": "customer service",
    "email": "info@neuroedgetechnologies.com",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/neuroedgetechnologies",
    "https://www.facebook.com/neuroedgetechnologies",
    "https://twitter.com/neuroedgetech",
    "https://www.instagram.com/neuroedgetechnologies"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "areaServed": {
    "@type": "Country",
    "name": "India"
  }
};

export const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "IT Training Courses",
  "description": "Comprehensive Full Stack Development and Programming Courses",
  "itemListElement": [
    {
      "@type": "Course",
      "name": "Java Full Stack Developer",
      "description": "Complete Java Full Stack Development with Spring Boot, React, and MySQL",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Neuro Edge Technologies"
      },
      "courseMode": "blended",
      "timeRequired": "P6M",
      "educationalLevel": "Intermediate",
      "offers": {
        "@type": "Offer",
        "category": "Paid",
        "priceCurrency": "INR"
      }
    },
    {
      "@type": "Course", 
      "name": "Python Full Stack Developer",
      "description": "Python Full Stack Development with Django, React, and PostgreSQL",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Neuro Edge Technologies"
      },
      "courseMode": "blended",
      "timeRequired": "P5M",
      "educationalLevel": "Intermediate"
    },
    {
      "@type": "Course",
      "name": "MERN Stack Developer", 
      "description": "Modern web development with MongoDB, Express, React, and Node.js",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Neuro Edge Technologies"
      },
      "courseMode": "blended",
      "timeRequired": "P4M",
      "educationalLevel": "Intermediate"
    }
  ]
};

export const internshipSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  "name": "IT Internship Program",
  "description": "Comprehensive internship program with real industry projects and placement support",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Neuro Edge Technologies"
  },
  "programType": "Internship",
  "timeToComplete": "P3M",
  "occupationalCategory": "Software Development",
  "offers": {
    "@type": "Offer",
    "category": "Paid"
  },
  "applicationDeadline": "2026-12-31",
  "maximumEnrollment": 20
};
