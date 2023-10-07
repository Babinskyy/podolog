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
        autoplay
        className="service-caro"
        dots={false}
        items={4}
        loop
        margin={5}
        nav={false}
        responsive={breakPoints}
      >
        <div className="single-service">
          <img src={require("../assets/images/salon/salon11.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>
        <div className="single-service">
          <img src={require("../assets/images/salon/salon30.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>

        <div className="single-service">
          <img src={require("../assets/images/salon/salon4.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>
        <div className="single-service">
          <img src={require("../assets/images/salon/salon6.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
          </div>
        </div>

        <div className="single-service">
          <img src={require("../assets/images/salon/salon5.jpg")} alt="" />
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
        <div className="single-service">
          <img src={require("../assets/images/salon/salon7.jpg")} alt="" />
          <div className="service-hover">
            {/* <img src={require("../assets/images/icons/1.png")} alt="" /> */}
            {/* <span>Body Treatment</span> */}
          </div>
        </div>
      </OwlCarousel>
    </section>
    // Service section end
  );
};

export default Service;
