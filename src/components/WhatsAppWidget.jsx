import React, { useState, useEffect } from "react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Show notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Hide notification after 10 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const whatsappNumber = "+919876543210"; // Replace with your actual WhatsApp number
  
  const quickMessages = [
    {
      text: "🎓 I want to know about Full Stack courses",
      message: "Hi! I'm interested in learning about your Full Stack Development courses. Can you provide more details about the curriculum, duration, and fees?"
    },
    {
      text: "💰 What are the course fees and payment options?",
      message: "Hello! I'd like to know about the course fees, payment plans, and any available discounts or scholarships."
    },
    {
      text: "📅 When does the next batch start?",
      message: "Hi! When does the next batch start? I'm ready to enroll and want to secure my seat."
    },
    {
      text: "🏢 Tell me about job placement assistance",
      message: "Hello! I want to know more about your job placement assistance, success rate, and partner companies."
    },
    {
      text: "📞 I want to speak with a counselor",
      message: "Hi! I'd like to schedule a call with an admission counselor to discuss the courses and my career goals."
    }
  ];

  const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Notification Bubble */}
        {showNotification && !isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-bounce-in border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">👋</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Need help choosing a course?
                </p>
                <p className="text-xs text-gray-600">
                  Chat with us on WhatsApp for instant support!
                </p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600 text-lg"
              >
                ×
              </button>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-[-8px] right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
          </div>
        )}

        {/* Chat Panel */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-80 max-h-96 overflow-hidden animate-slide-up border border-gray-200">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">💬</span>
                </div>
                <div>
                  <h3 className="font-semibold">TechAcademy Support</h3>
                  <p className="text-xs text-green-100">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-100 text-xl"
              >
                ×
              </button>
            </div>

            {/* Quick Messages */}
            <div className="p-4 max-h-64 overflow-y-auto">
              <p className="text-sm text-gray-600 mb-4">
                👋 Hi there! How can we help you today?
              </p>
              
              <div className="space-y-2">
                {quickMessages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => sendWhatsAppMessage(item.message)}
                    className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg text-sm transition-colors border border-gray-200 hover:border-green-200"
                  >
                    {item.text}
                  </button>
                ))}
              </div>

              {/* Custom Message */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => sendWhatsAppMessage("Hi! I have a question about your courses.")}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>Start Custom Chat</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative"
        >
          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
          
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;
