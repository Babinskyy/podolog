import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const breakPoints = {
  0: {
    items: 2,
  },
  576: {
    items: 3,
  },
  768: {
    items: 4,
  },
};

const Service = (props) => {
  return (
    // Service section start
    <section
      className="service"
      style={{
        width: "99%",
        display: "flex",
        justifyContent: "space-around",
        margin: "0 auto",
      }}
    >
      {/* <OwlCarousel
        // autoplay
        className="service-caro"
        dots={false}
        items={4}
        // loop
        margin={5}
        nav={false}
        // responsive={breakPoints}
        style={{ padding: "20px" }}
      > */}
      <div className="single-service" style={{}}>
        <img src={require("../assets/images/salon/salon30.jpg")} alt="" />
        <div className="service-hover"></div>
      </div>
      <div className="single-service" style={{ flexBasis: "46.3%" }}>
        <img src={require("../assets/images/salon/salon50.jpg")} alt="" />
        <div className="service-hover"></div>
      </div>
      <div className="single-service" style={{}}>
        <img src={require("../assets/images/salon/salon31.jpg")} alt="" />
        <div className="service-hover"></div>
      </div>
      {/* </OwlCarousel> */}
    </section>
    // Service section end
  );
};

export default Service;
