import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import "../images/sanFranciscoTrip.jpg";
import "../images/carrying-a-skateboard.jpeg";
import "../styles/Sass/whoAmI.scss";

export const WhoAmI = () => {
  const [displayParagraphOne, setDisplayParagraphOne] = useState(false);
  const [displayParagraphTwo, setDisplayParagraphTwo] = useState(false);
  return (
    <div className="whoami-body">
      <Row className="row-who">
        <Col className="card-who">
          <div className="card-body">
            <div
              onClick={() => setDisplayParagraphOne(!displayParagraphOne)}
              className="card-title"
            >
              <h1>Here is who I am!</h1>
            </div>
            <div className="body-container">
              <p className="card-text">
                Hi everyone, my name is Gustavo and I am a Software Developer,
                My background started in the areas of Marketing and Management.
              </p>
              <br />
              <p className="card-text">
                I switched my career toward tech industry due to I like to solve
                problems or situations faced everyday for the most of the
                people.
              </p>
              <br/>
              <p className="card-text">
                I consider myself such as team-player, reliable and indenpendent
                member to participe in all posible life cicle of any project
                that I'm being envolved.
              </p>{" "}
              <br />
            </div>

            <div
              onClick={() => setDisplayParagraphTwo(!displayParagraphTwo)}
              className="card-title"
            >
              <h1>This is how I enjoy my time</h1>
            </div>
            <>
              <div className="body-container">
                <p className="card-text">
                  I like to learn, that's why I'm here, software develpment path
                  become you in an endless learner. Also, I like to do surfing,
                  skimboarding, skateboarding and soccer, and it's a way to
                  descompress my mind when I feel stuck.{" "}
                </p>
                <br/>
                <p className="card-text">
                  I like to go out with my family and friends.
                </p>
              </div>
            </>
          </div>
          <div className="box">
            <img src={require("../images/sanFranciscoTrip.png")} alt="san francisco" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
