import React, { useEffect, useState } from "react";
import axios from "../axios-orders";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import SingleTestimonial from "../Components/SingleTestimonial";
import Loader from "../Components/Loader";

const Testimonial = (props) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("/testimonials.json")
      .then((res) => {
        // console.log(res)
        setTestimonials(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(this.state.testimonials)

  let renderTestimonials = <Loader />;
  if (testimonials.length) {
    renderTestimonials = (
      <OwlCarousel
        autoplay
        className="test-caro"
        dots={true}
        items={1}
        loop
        margin={0}
        nav={false}
      >
        {testimonials.map((tsml) => {
          return (
            <SingleTestimonial
              key={tsml.userId}
              id={tsml.userId}
              name={tsml.userName}
              designation={tsml.designation}
              body={tsml.body}
            />
          );
        })}
      </OwlCarousel>
    );
  }

  return (
    // Testimonial section start
    <section className="testimonial bg-lightred">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">{renderTestimonials}</div>
        </div>
      </div>
    </section>
    // Testimonial section end
  );
};

export default Testimonial;
