import React, { useEffect } from "react";

const Analytics = () => {
  // Replace with your actual Google Analytics 4 Measurement ID
  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

  useEffect(() => {
    // Add Google Analytics script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Add Google Analytics configuration
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);
  }, [GA_MEASUREMENT_ID]);

  return null;
};

export default Analytics;
