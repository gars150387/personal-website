import React from "react";
import "../styles/Sass/project.scss";

export const Projects = () => {
  return (
    <div className="project-outter-container">
      <div className="img-container">
        <img
          src={require("../images/personal-website.jpg")}
          alt="personal website"
        />
        <div className="container-stack-icons">
          <img src={require("../icon/html.png")} alt="html" />
          <img src={require("../icon/sass.png")} alt="sass" />
          <img src={require("../icon/javascript.png")} alt="javascript" />
          <img src={require("../icon/react.png")} alt="react" />
          <img src={require("../icon/bootstrap.png")} alt="bootstrap" />
          <img src={require("../icon/pwa.png")} alt="pwa" />
        </div>
        <br />
        <div className="container-button-anchor">
          <a
            href="https://gars.link/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            href="https://github.com/gars150387/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="img-container">
        <img src={require("../images/pallet305-website.jpg")} alt="pallet305" />
        <div className="container-stack-icons">
          <img src={require("../icon/html.png")} alt="html" />
          <img src={require("../icon/css.png")} alt="css" />
          <img src={require("../icon/javascript.png")} alt="javascript" />
          <img src={require("../icon/react.png")} alt="react" />
          <img src={require("../icon/bootstrap.png")} alt="bootstrap" />
        </div>
        <br />
        <div className="container-button-anchor">
          <a
            href="https://www.pallet305.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>

          <a
            href="https://github.com/gars150387/pallet-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>{" "}
      <div className="img-container">
        <img src={require("../images/Rosa Mistica.jpg")} alt="Rosa Mistica" />
        <div className="container-stack-icons">
          <img src={require("../icon/css.png")} alt="css" />
          <img src={require("../icon/javascript.png")} alt="javascript" />
          <img src={require("../icon/react.png")} alt="react" />
          <img src={require("../icon/bootstrap.png")} alt="bootstrap" />
          <img src={require("../icon/redux.webp")} alt="redux" />
          <img src={require("../icon/pwa.png")} alt="pwa" />
          <img src={require("../icon/node.png")} alt="node" />
          <img src={require("../icon/express.webp")} alt="express" />
          <img src={require("../icon/mongodb.png")} alt="mongodb" />
          <img src={require("../icon/http.png")} alt="http" />
        </div>
        <br />
        <div className="container-button-anchor">
          <a
            href="https://rosa-mistica-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            href="https://github.com/gars150387/inventory-system-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="img-container">
        <img src={require("../images/UnityWorkingWithGoogleFirebase.jpg")} alt="UnityWorkingWithGoogleFirebase" />
        <div className="container-stack-icons">
          <img src={require("../icon/css.png")} alt="css" />
          <img src={require("../icon/javascript.png")} alt="javascript" />
          <img src={require("../icon/react.png")} alt="react" />
          <img src={require("../icon/bootstrap.png")} alt="bootstrap" />
          <img src={require("../icon/redux.webp")} alt="redux" />
          <img src={require("../icon/pwa.png")} alt="pwa" />
          <img src={require("../icon/node.png")} alt="node" />
          <img src={require("../icon/express.webp")} alt="express" />
          <img src={require("../icon/mongodb.png")} alt="mongodb" />
          <img src={require("../icon/http.png")} alt="http" />
        </div>
        <br />
        <div className="container-button-anchor">
          <a
            href="https://rosa-mistica-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            href="https://github.com/gars150387/inventory-system-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};
