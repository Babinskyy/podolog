import React from "react";
import Banner from "../../Sections/Banner";
import AboutSec from "../../Sections/About";
import Service from "../../Sections/Service";
import Procedure from "../../Sections/Procedure";
import Testimonial from "../../Sections/Testimonial";
import Team from "../../Sections/Team";
import Appointment from "../../Sections/Appointment";
import Blog from "./Blog";
import Contact from "../../Sections/Contact";

const home = (props) => {
  return (
    <React.Fragment>
      <Banner />
      <AboutSec />
      <Service />
      <Procedure />

      <Contact />
    </React.Fragment>
  );
};

export default home;
