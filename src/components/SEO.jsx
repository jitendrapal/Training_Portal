import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
}) => {
  const baseUrl = 'https://neuroedgetechnologies.com';
  const defaultTitle = 'Neuro Edge Technologies - Best IT Training Institute | Full Stack Developer Courses';
  const defaultDescription = 'Learn Full Stack Development with Java, React, Node.js, Python. 95% placement rate, expert trainers, hands-on projects. Join 500+ successful graduates at top companies.';
  const defaultKeywords = 'Full Stack Developer Course India, Java Full Stack Bootcamp, React Node.js Training, Python Full Stack Course, IT Training Institute, Programming Courses, Web Development Training, Pune IT Training, Best Coding Bootcamp India';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const seoTitle = title ? `${title} | Neuro Edge Technologies` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = ogImage || defaultImage;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Neuro Edge Technologies Training Institute" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Neuro Edge Technologies" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      <meta name="twitter:site" content="@neuroedgetech" />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune, Maharashtra" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
