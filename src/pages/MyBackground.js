import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { CertificationShow } from "../components/CertificationShow";

import "../styles/Sass/background.scss";

export const MyBackground = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Row>
        {" "}
        <Col className="search-input">
          <input
            name="value"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search my certificate here!"
          />
        </Col>
      </Row>{" "}
      <Row>
        <div style={{
          height:"50vh",
          width:"50vw",
          margin:"0 auto",
          display:"grid",
          overflow:"scroll"
        }}>
          <CertificationShow
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            key={props.id}
          />
        </div>{" "}
      </Row>
    </>
  );
};
