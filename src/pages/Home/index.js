import React from "react";
import Contact from "../Contact";
import { Banner, Testimonial, Information } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Testimonial />
      <Information />
      {/* <Register /> */}
      <Contact />
    </div>
  );
};

export default Home;
