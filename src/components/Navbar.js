import React, { useState } from "react";
import { SocialIcons } from "./SocialIcons"
import "../styles/Sass/navbar.scss";
import { Link } from "react-router-dom";

export const NavbarHeader = () => {
  const [display, setDisplay] = useState(false);
  const activeTab = window.location.hash;

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            onClick={() => setDisplay(!display)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "#who" ? "active" : null
                  } `}
                  href="#who"
                >
                  Who I am?
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "#projects" ? "active" : null
                  } `}
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "#experience" ? "active" : null
                  } `}
                  href="#experience"
                >
                  Background
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "#contact" ? "active" : null
                  } `}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "#background" ? "active" : null
                  } `}
                  href="#background"
                >
                  Certifications
                </a>
              </li>
              <Link to="/resume">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#background"
                >
                  Resume
                </a>
              </li>{" "}
              </Link>
            </ul>
            <div className="d-flex" role="search">
             <SocialIcons />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
