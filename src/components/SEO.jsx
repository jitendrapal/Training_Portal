import React, { useEffect } from "react";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
}) => {
  const baseUrl = "https://neuroedgetechnologies.com";
  const defaultTitle =
    "Neuro Edge Technologies - Best IT Training Institute | Full Stack Developer Courses";
  const defaultDescription =
    "Learn Full Stack Development with Java, React, Node.js, Python. 95% placement rate, expert trainers, hands-on projects. Join 500+ successful graduates at top companies.";
  const defaultKeywords =
    "Full Stack Developer Course India, Java Full Stack Bootcamp, React Node.js Training, Python Full Stack Course, IT Training Institute, Programming Courses, Web Development Training, Pune IT Training, Best Coding Bootcamp India";
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const seoTitle = title ? `${title} | Neuro Edge Technologies` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = ogImage || defaultImage;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Function to update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Function to update or create link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Basic Meta Tags
    updateMetaTag("description", seoDescription);
    updateMetaTag("keywords", seoKeywords);
    updateMetaTag("author", "Neuro Edge Technologies Training Institute");
    updateLinkTag("canonical", canonicalUrl);

    // Robots
    updateMetaTag("robots", noindex ? "noindex, nofollow" : "index, follow");
    updateMetaTag("googlebot", noindex ? "noindex, nofollow" : "index, follow");

    // Open Graph
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:title", seoTitle, true);
    updateMetaTag("og:description", seoDescription, true);
    updateMetaTag("og:image", seoImage, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:site_name", "Neuro Edge Technologies", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card
    updateMetaTag("twitter:card", twitterCard);
    updateMetaTag("twitter:title", seoTitle);
    updateMetaTag("twitter:description", seoDescription);
    updateMetaTag("twitter:image", seoImage);
    updateMetaTag("twitter:site", "@neuroedgetech");

    // Additional Meta Tags
    updateMetaTag("language", "English");
    updateMetaTag("revisit-after", "7 days");
    updateMetaTag("distribution", "global");
    updateMetaTag("rating", "general");
    updateMetaTag("geo.region", "IN-MH");
    updateMetaTag("geo.placename", "Pune, Maharashtra");
    updateMetaTag("geo.position", "18.5204;73.8567");
    updateMetaTag("ICBM", "18.5204, 73.8567");

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [
    seoTitle,
    seoDescription,
    seoKeywords,
    canonicalUrl,
    seoImage,
    ogType,
    twitterCard,
    structuredData,
    noindex,
  ]);

  return null; // This component doesn't render anything visible
};

export default SEO;
