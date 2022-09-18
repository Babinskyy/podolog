import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Loader from "./Loader";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState.menuOpen);
  };

  const clearStateHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  let absHeader = props.location.pathname === "/" ? " abs-header" : "";
  let right = props.location.pathname === "/" ? "" : " text-right";

  return (
    // Header start
    <header className={"header" + absHeader}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-3">
            <NavLink to="/" className="logo">
              <img src={require("../assets/images/logo1.png")} alt="" />
            </NavLink>
          </div>
          <div className={"col-md-9" + right}>
            <nav className="primary-menu">
              <button className="mobile-menu" onClick={menuToggleHandler}>
                <i className="ti-menu"></i>
              </button>
              <ul className={menuOpen ? "active" : ""}>
                <li>
                  <NavLink to="/" onClick={clearStateHandler}>
                    Strona główna
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={clearStateHandler}>
                    O nas
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" onClick={clearStateHandler}>
                    Cennik
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={clearStateHandler}>
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    // Header start
  );
};

export default withRouter(Navbar);
