import React, { useState } from "react";
import { NavbarHeader } from "../components/Navbar";

import "../styles/Sass/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleEffect = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="body-container">
      {showNavbar === false ? (
        ""
      ) : (
        <div className="overlay">
          <NavbarHeader />
        </div>
      )}

      <div>
        <div className="home-box" onClick={handleEffect}>
          <Link to="/main">
            <span
              id="container-render"
              className="animate__animated animate__pulse animate__infinite animate__slower"
            >
              G.A.R.S
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
