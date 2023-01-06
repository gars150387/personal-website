import React, { useState } from "react";
import { Col } from "react-bootstrap";

import { CertificationShow } from "../components/CertificationShow";
import { ScrollUp } from "../hooks/useScrollUp";
import { NavbarHeader } from "../components/Navbar";

import "../styles/Sass/background.scss";
import "../styles/Sass/navbar.scss";

export const MyBackground = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="myBackground-body">
      <div className="navbar-after-click">
        <p>G.A.R.S</p>
      </div>
      <Col className="page-rendered-container">
        <NavbarHeader />

        <Col className="search-input">
          <input
            name="value"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search my certificate here!"
          />
        </Col>

        <CertificationShow
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          key={props.id}
        />
      </Col>
      <ScrollUp />
    </div>
  );
};
