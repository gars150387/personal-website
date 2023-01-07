import React from "react";

export const SocialIcons = () => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "8px"
      }}
    >
      <a href="https://www.instagram.com/gustavsanteliz/" target="_blank" rel="noopener noreferrer">
        <img
          style={{ width: "50px" }}
          src={require("../icon/instagram.png")}
          alt="instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/garsanteliz" target="_blank" rel="noopener noreferrer">
        <img
          style={{ width: "50px" }}
          src={require("../icon/linkedin.png")}
          alt="linkedin"
        />
      </a>
      <a href="https://twitter.com/Gustavo99059116" target="_blank" rel="noopener noreferrer">
        <img
          style={{ width: "50px" }}
          src={require("../icon/twitter.png")}
          alt="twitter"
        />
      </a>
      <a href="https://wa.me/message/ETDIVRN3U2P6O1" target="_blank" rel="noopener noreferrer">
        <img
          style={{ width: "50px" }}
          src={require("../icon/whatsapp.png")}
          alt="whatsapp"
        />
      </a>
      <a href="https://github.com/gars150387" target="_blank" rel="noopener noreferrer">
        <img
          style={{ width: "50px" }}
          src={require("../icon/github.png")}
          alt="github"
        />
      </a>
    </div>
  );
};
