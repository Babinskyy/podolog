import React from "react";
import { Link } from "react-router-dom";

const AboutSec = (props) => {
  return (
    // About section start
    <section className="about">
      <img
        src={require("../assets/images/china-rose.png")}
        alt=""
        className="flower-1"
      />
      <img
        src={require("../assets/images/jasmine.png")}
        alt=""
        className="flower-2"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">
            <div className="sec-heading">
              <img src={require("../assets/images/butterfly.png")} alt="" />

              <h3 className="sec-title">W czym możemy Ci pomóc?</h3>
              <p style={{ fontSize: "20px", color: "black" }}>
                W obszar kompetencji podologa wchodzi diagnozowanie, leczenie i
                pielęgnacja stóp. Wydaje się to prozaiczne, ale o stopy trzeba
                dbać tak samo jak o każdą inną część ciała. Najczęstszymi
                problemami podologicznymi są wrastające paznokcie, nadmierne
                zrogowacenia, odciski, pękające stopy, kurzajki i grzybica
                paznokci. Powyższe schorzenia wymagają specjalistycznej opieki,
                której nie otrzyma się w gabinecie kosmetycznym. Jeżeli cierpisz
                na któreś z nich, nie zwlekaj z wizytą u specjalisty. W naszym
                gabinecie dołożymy wszelkim starań, abyś poczuł/a się lepiej!
              </p>
            </div>
            <Link to="/contact" className="btn btn-round">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </section>
    // About section end
  );
};

export default AboutSec;
