import React from "react";
import { SocialIcons } from "./SocialIcons";
import "../styles/Sass/navbar.scss";
import { Link } from "react-router-dom";

export const NavbarHeader = () => {

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <div className="navbar-section">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={`nav-link`} href="#who">
                  Who I am?
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="#projects">
                  Projects
                </a>
              </li>
              {/* <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "#experience" ? "active-tab" : null
                  } `}
                  href="#experience"
                >
                  Background
                </a>
              </li> */}
              <li className="nav-item">
                <a className={`nav-link`} href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="#background">
                  Certifications
                </a>
              </li>
              <Link to="/resume">
                <li className="nav-item">
                  <a className="nav-link">Resume</a>
                </li>{" "}
              </Link>
            </ul>
            <div className="d-flex" role="search">
              <SocialIcons />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
