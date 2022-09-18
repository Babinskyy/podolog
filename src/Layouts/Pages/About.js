import React, { Fragment } from "react";
import AboutSec from "../../Sections/About";
import Team from "../../Sections/Team";
import Testimonial from "../../Sections/Testimonial";

const About = () => {
  return (
    <Fragment>
      <AboutSec />
      <Team />
      <Testimonial />
    </Fragment>
  );
};

export default About;
