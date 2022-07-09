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
          </div>
        </Slider>
      </Col>
      </Row>
    </>
  );
};
