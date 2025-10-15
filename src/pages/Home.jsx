import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
