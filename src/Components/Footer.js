import React from "react";
import { Link } from "react-router-dom";

const footer = (props) => {
  return (
    // Footer strat
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/" className="logo foo-logo">
              {/* <img src={require("../assets/images/logo1.png")} alt="" /> */}
              <img
                src={require("../assets/images/podolog_logo.png")}
                alt="logo"
                style={{ height: "85px", width: "85px", margin: "0 auto" }}
              />
            </Link>
            <nav className="foo-nav">
              <ul>
                <li>
                  <Link to="/">Strona główna</Link>
                </li>
                <li>
                  <Link to="/about">O nas</Link>
                </li>

                <li>
                  <Link to="/blog">Cennik</Link>
                </li>
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
              </ul>
            </nav>
            {/* <div className="foo-social">
              <Link to="#">
                <i className="ti-facebook"></i>
              </Link>

              <Link to="#">
                <i className="ti-instagram"></i>
              </Link>
            </div>
            <p className="copyright">
              &copy; COPYRIGHT {`${new Date().getFullYear()} `}
              <a href="https://geeko.software/" target="_blank">
                geeko.software
              </a>{" "}
              ALL RIGHTS RESERVED.
            </p> */}
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 auto",
              }}
              className="foo-nap"
            >
              <span>Podolog Sopot</span>
              <a
                className="address"
                style={{ color: "inherit" }}
                target="_blank"
                href="https://www.google.com/maps/place/Podolog+Sopot/@54.4414767,18.5608784,17z/data=!3m1!4b1!4m6!3m5!1s0x46fd0b9131a151a9:0xde43beea3f6cf932!8m2!3d54.4414736!4d18.5634533!16s%2Fg%2F11vbkj7pf5?entry=ttu"
              >
                Kościuszki 10, Sopot
              </a>
              <a
                href="tel:+48533647946"
                style={{ color: "inherit" }}
                className="phone-number"
              >
                tel: +48 533 647 946
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    // Footer end
  );
};

export default footer;
