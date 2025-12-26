import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Internship from "../components/Internship";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <Services />
      <Internship />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
