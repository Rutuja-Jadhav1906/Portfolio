import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: "#161513", borderBottom: "1px solid #800080" }}
    >
      <div className="container-fluid nav-body">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav-options">
            <div className="nav-links">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/projects">
                    My Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-contact">
              <a className="nav-link" href="/contact">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
