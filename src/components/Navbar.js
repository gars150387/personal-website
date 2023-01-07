import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaQuestionCircle, FaGithub, FaNetworkWired } from "react-icons/fa";
import { GrCertificate, GrContact } from "react-icons/gr";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Sass/navbar.scss";

export const NavbarHeader = () => {
  const [display, setDisplay] = useState(true)
  window.onscroll = function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Scroll position: ' + scrollTop + 'px');
      if(scrollTop > 0){
          return setDisplay(false)
        } else {
          return setDisplay(true)
        }
  };

  return (
    <>
      <nav
        className={`navbar bg-body-none fixed-top d-${display === false ? "none" : "visible"}`}
      >
        <div className="container-fluid">
          <div className="navbar-brand"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                G.A.R.S
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link to="/whoami">
                  <div id="navbarMain-option" href="/whoami">
                    <p>
                      Who Am I <FaQuestionCircle className="icons" />
                    </p>
                  </div>
                </Link>
                <Link to="/mybackground">
                  <div id="navbarMain-option" href="/mybackground">
                    <p>
                      My Background <GrCertificate className="icons" />
                    </p>
                  </div>
                </Link>
                <div
                  id="navbarMain-option"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/gars150387"
                >
                  <p>
                    My GitHub <FaGithub className="icons" />
                  </p>
                </div>
                <Link to="/contact">
                  <div id="navbarMain-option" href="/contact">
                    <p>
                      Contact <GrContact className="icons" />
                    </p>
                  </div>
                </Link>
                <Link to="/project">
                  <div id="navbarMain-option" href="/project">
                    <p>
                      Projects <FaNetworkWired className="icons" />
                    </p>
                  </div>
                </Link>
                <Link to="/resume">
                  <div className="button-container-resume">
                    <Button className="button-certificate-link">
                      <p>Resume </p>
                      <i className="bi bi-file-person"></i>
                    </Button>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
