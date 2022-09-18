import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    // Banner section start
    <section className="banner">
      <div className="spa-img">
        <img src={require("../assets/images/salon/Julia.png")} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <span>podolog & beauty center</span>
              <h2>Zadbaj o swoje stopy już dziś.</h2>
              <p>
                Together creeping heaven upon third dominion be upon won't
                darkness rule behold it created good saw after she'd Our set
                living.
              </p>
              <a href="/contact" className="btn btn-round">
                kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Banner section end
  );
};

export default Banner;
