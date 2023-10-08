import React from "react";
import { Link } from "react-router-dom";
import clinic1 from "../assets/images/salon/salon30.jpg";
import clinic2 from "../assets/images/salon/salon50.jpg";

const AboutSec = (props) => {
  return (
    // About section start
    <section className="about" style={{ flexGrow: "1" }}>
      {/* <img
        src={require("../assets/images/china-rose.png")}
        alt=""
        className="flower-1"
      />
      <img
        src={require("../assets/images/jasmine.png")}
        alt=""
        className="flower-2"
      /> */}

      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 m-auto">
            <div className="sec-heading">
              {/* <img src={require("../assets/images/butterfly.png")} alt="" /> */}

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
                gabinecie dołożymy wszelkich starań, abyś poczuł/a się lepiej!
              </p>
            </div>
            <Link to="/blog" className="btn btn-round">
              Cennik
            </Link>
          </div>
        </div>
        {window.location.pathname === "/about" ? (
          <div className="row" style={{ marginTop: "40px" }}>
            <img
              src={clinic2}
              alt="clinic"
              className="col-10"
              style={{ margin: "0 auto", borderRadius: "50px" }}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
    // About section end
  );
};

export default AboutSec;
