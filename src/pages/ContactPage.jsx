import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our courses and services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What are the course timings?
              </h3>
              <p className="text-gray-600">
                We offer flexible timings with morning (9 AM - 12 PM), evening
                (6 PM - 9 PM), and weekend batches to accommodate working
                professionals and students.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide placement assistance?
              </h3>
              <p className="text-gray-600">
                Yes! We provide comprehensive placement support including resume
                building, interview preparation, and direct job referrals to our
                partner companies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is the fee structure?
              </h3>
              <p className="text-gray-600">
                Our course fees are competitive and we offer flexible payment
                options. Contact us for detailed fee structure and available
                discounts.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I attend classes online?
              </h3>
              <p className="text-gray-600">
                Yes, we offer both online and offline classes. All sessions are
                recorded and available for review, ensuring you never miss
                important content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
