import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const urgencyMessages = [
    "🔥 Only 3 seats left in Java Full Stack batch!",
    "⚡ Early bird discount ends in 24 hours!",
    "🎯 5 students enrolled in the last hour!",
    "💼 95% placement rate - Join the success story!",
    "🚀 Next batch starts in 5 days - Don't miss out!"
  ];

  // Show banner after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  // Rotate messages every 4 seconds
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % urgencyMessages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, urgencyMessages.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 animate-slide-down">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-4 max-w-md">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-red-200 text-lg font-bold"
        >
          ×
        </button>

        {/* Message */}
        <div className="flex-1 text-center">
          <p className="text-sm font-medium animate-pulse">
            {urgencyMessages[currentMessage]}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/enroll"
          className="bg-white text-red-500 px-4 py-1 rounded-full text-sm font-bold hover:bg-red-50 transition-colors"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default UrgencyBanner;
