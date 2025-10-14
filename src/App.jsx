import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import EnrollmentForm from "./components/EnrollmentForm";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <EnrollmentForm />
      <Footer />
    </div>
  );
}

export default App;
