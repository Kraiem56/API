import React from "react";
import {  Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-title" to="/">
            <img src="https://www.nicepng.com/png/detail/212-2125033_breaking-bad-icon-breaking-bad-logo-svg.png" alt="logo" />
            <span className="Nav-title">
              Breacking bad wiki
            </span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link  to="/">
                Characters
              </Link> 
            </li>
            <li>
              <Link to="/episodes">
                Episodes
              </Link> 
            </li>
            <li>
              <Link to="/quotes">
                Quotes
              </Link> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
