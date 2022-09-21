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
              <img src={require("../assets/images/logo1.png")} alt="" />
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
            <div className="foo-social">
              <Link to="#">
                <i className="ti-facebook"></i>
              </Link>

              <Link to="#">
                <i className="ti-instagram"></i>
              </Link>
            </div>
            <p className="copyright">
              &copy; COPYRIGHT {`${new Date().getFullYear()} `}
              <a href="https://google.com">geeko.software</a> ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
    // Footer end
  );
};

export default footer;
