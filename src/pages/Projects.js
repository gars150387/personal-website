import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import { NavbarHeader } from "../components/Navbar";
import { settings } from "../components/Setting";

import "../styles/Sass/project.scss";

export const Projects = () => {
  return (
    <>
      <div className="navbar-after-click">
        <p>G.A.R.S</p>
      </div>
      <NavbarHeader className="navbar-contact" />
      <Row className="project-outter-container">
        <Col className="project-container-title">
          <h1>Projects</h1>
        </Col>
        <Col className="project-container">
          <Slider className="slider" {...settings}>
            <div className="slider-info">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gars.link/"
              >
                <h3>G.A.R.S</h3>
              </a>

              <Col className="slider-img-container">
                <img src={require("../images/personal-website.jpg")} alt="" />
              </Col>
            </div>
            <div className="slider-info">
              <h3>Description</h3>
              <Col className="slider-description-container">
                <p>
                  My personal website was built with React.js, where it was
                  implemented Hooks, react-route-dom like Browser, Routes, Route
                  and Link, also I used React-Bootstrap to create layouts and
                  components such as Navbar, Card, Button, etc and React-icons
                  for icons showed in website. Also, animate.css for animations.{" "}
                  <br />
                  For a better UX, I used SweetAlert2, to trigger customized
                  modals. I installed emailjs to offer a communication channel
                  between user and owener. <br />
                  To render PDF file, I used react-pdf-viewer. <br />
                  Sass was used to set up to style every component for regular
                  and large screens as smallers screens.
                  <br />
                  Finally, Cypress.io was used to test every component and
                  funciton in th website.
                  <br />
                  Netlify to deploy and hosting repository.

                </p>
              </Col>
            </div>
            <div className="slider-info">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.pallet305.com/"
              >
                <h3>pallet305.com</h3>
              </a>
              <Col className="slider-img-container">
                <img src={require("../images/pallet305-website.jpg")} alt="" />
              </Col>
            </div>
            <div className="slider-info">
              <h3>Description</h3>
              <Col className="slider-description-container">
                <p>
                  Pallet305 is a woodcraft designing and building website built
                  based on React.js, where it was implemented Hooks,
                  react-route-dom to navegate between components and Link to
                  connect to another websites like Instagram, also React
                  Bootstrap was used to create layouts such as grips and stacks
                  and implemented components such as Carousel, Navbar, Card and
                  more and fontawesome for icons. Also, animate.css for
                  animations. <br />
                  To offer a better UX, I used SweetAlert2, to pop up modals and
                  Emailjs to create a conexion between users and owener of the
                  website. <br />
                  Css was used to set up to style every component for regular
                  and large screens as smallers screens.
                  <br />
                  Finally, Cypress.io was used to test every component and
                  funciton in th website.
                  <br />
                  Netlify to deploy and hosting repository.
                </p>
              </Col>
            </div>
            <div className="slider-info">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://andresdavidecowaxtesting.netlify.app/"
              >
                <h3>Ecowax</h3>
              </a>
              <Col className="slider-img-container">
                <img src={require("../images/ecowax-website.jpg")} alt="" />
              </Col>
            </div>
            <div className="slider-info">
              <h3>Description</h3>
              <Col className="slider-description-container">
                <p>
                  andresdavidecowaxtesting is a e-commerce website built based
                  on React.js, where it was implemented Hooks, react-route-dom
                  to navegate between components, also React Bootstrap was used
                  to create layouts such as grips, Col and Row and implemented
                  components such as Navbar, Card and more and also, React-slick
                  was used to create sliders and set up setting to make it
                  responsive and fontawesome for icons. <br />
                  Also, it was used React-Player to render videos.<br />
                  SweetAlert2, to pop up modals and Emailjs to create a conexion
                  between users and owener of the website. <br />
                  Css was used to set up to style every component for regular
                  and large screens as smallers screens.
                  <br />
                  Finally, Cypress.io was used to test every component and
                  funciton in th website.
                  <br />
                  Netlify to deploy and hosting repository.
                </p>
              </Col>
            </div>
          </Slider>
        </Col>
      </Row>
    </>
  );
};
