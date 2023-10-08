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
    <section className="service">
      <OwlCarousel
        // autoplay
        className="service-caro"
        dots={false}
        items={4}
        // loop
        margin={5}
        nav={false}
        // responsive={breakPoints}
        style={{ padding: "20px" }}
      >
        <div className="single-service">
          <img src={require("../assets/images/salon/salon30.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>
        <div
          className="single-service"
          style={{ width: "1150px", marginLeft: "50px" }}
        >
          <img
            src={require("../assets/images/salon/salon50.jpg")}
            alt=""
            style={{ margin: "0 auto" }}
          />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>
        <div className="single-service" style={{ margin: "0" }}>
          <img alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>
        <div className="single-service">
          <img src={require("../assets/images/salon/salon31.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>
      </OwlCarousel>
    </section>
    // Service section end
  );
};

export default Service;
