import React, { useEffect } from "react";
import Banner from "../../Sections/Banner";
import AboutSec from "../../Sections/About";
import Service from "../../Sections/Service";
import Procedure from "../../Sections/Procedure";
import Testimonial from "../../Sections/Testimonial";
import Team from "../../Sections/Team";
import Appointment from "../../Sections/Appointment";
import Blog from "./Blog";
import Contact from "../../Sections/Contact";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Banner />
      <AboutSec />
      <Service />
      {/* <Procedure /> */}

      <Contact />
    </React.Fragment>
  );
};

export default Home;
