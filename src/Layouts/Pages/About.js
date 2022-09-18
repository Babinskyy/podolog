import React, { Fragment, useEffect } from "react";
import AboutSec from "../../Sections/About";
import Team from "../../Sections/Team";
import Testimonial from "../../Sections/Testimonial";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <AboutSec />
      <Team />
      <Testimonial />
    </Fragment>
  );
};

export default About;
