import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavbarHeader } from "../components/Navbar";

import "../images/sanFranciscoTrip.jpg";
import "../images/carrying-a-skateboard.jpeg";
import "../styles/Sass/whoAmI.scss";

export const WhoAmI = () => {
  return (
    <div classNameName="whoami-body">
      <div className="navbar-after-click">
        <p>G.A.R.S</p>
      </div>
      <Row className="row-who">
        <NavbarHeader id="navbar-whoami" />
      <Col className="card-who">
        <div className="card-body">
          <h5 className="card-title">
            <h1>Here is who I am!</h1>
          </h5>
          <p className="card-text">
            Hi everyone, my name is Gustavo and I am a Software Developer, My
            background is based in Marketing and Management.
          </p>
          <p className="card-text">
            I started building my skillset as a software developer deciding to
            attempt a coding Bootcamp to get my programming basic fundamentals.
          </p>
          <p className="card-text">
            I'm always looking for new challenges to help me to grow as a person
            as professional
          </p>
          <h5 className="card-title">This is how I enjoy my time</h5>
          <p className="card-text">
            I consider myself an outdoor person, I like to go out and enjoy the
            nature around me. I like to spend time skateboarding on the street
            or at the pump track.
          </p>
          <p className="card-text">
            Also, I like to do skimboarding and enjoy the time on the beach and
            try to keep up a balanced way of life.
          </p>
        </div>
        <div className="box">
          <div>
            <textarea disabled></textarea>
            <textarea disabled></textarea>
          </div>
        </div>
      </Col>

      </Row>
    </div>
  );
};
