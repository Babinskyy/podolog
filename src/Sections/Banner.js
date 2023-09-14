import React from "react";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    // Banner section start
    <section className="banner">
      <div className="spa-img">
        <img src={require("../assets/images/salon/julia-sharp.png")} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <h2>Przywracamy komfort i zdrowie Twoich stóp.</h2>
              <p style={{ fontSize: "20px", color: "black" }}>
                Zapewniamy możliwości profesjonalnej diagnostyki, leczenia i
                profilaktyki schorzeń skóry stóp i paznokci, a to wszystko
                dzięki wieloletniemu doświadczeniu i najnowszym metodom z
                dziedziny podologii i ortopodologii.
              </p>
              <Link to="/contact" className="btn btn-round">
                kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    // Banner section end
  );
};

export default Banner;
