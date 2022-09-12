import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { CertificationShow } from "../components/CertificationShow";
import { ScrollUp } from "../hooks/useScrollUp";
import { NavbarHeader } from "../components/Navbar";

import "../styles/Sass/background.scss";
import "../styles/Sass/navbar.scss"

export const MyBackground = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="myBackground-body">
      <div className="navbar-after-click">
        <p>G.A.R.S</p>
      </div>
      <Col className="page-rendered-container">
        <NavbarHeader  />

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
      <Link to="/resume">
            <div className="button-container-resume">
              <Button className="button-certificate-link">
                <p>Resume </p><i className="bi bi-file-person"></i>
              </Button>
            </div>
          </Link>
      <ScrollUp />
    </div>
  );
};
