import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/Sass/project.scss";

export const Projects = () => {
  return (
    <>
      <Row className="project-outter-container">
        <Col className="project-container-title">
          <h1>Projects</h1>
        </Col>
        <Row>
          <Col className="slider-img-container">
            <img src={require("../images/personal-website.jpg")} alt="" />
          </Col>

          <Col className="slider-img-container">
            <img src={require("../images/pallet305-website.jpg")} alt="" />
          </Col>
          <Col className="slider-img-container">
            <img src={require("../images/ecowax-website.jpg")} alt="" />
          </Col>
        </Row>
      </Row>
    </>
  );
};
