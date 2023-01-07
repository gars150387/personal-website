import React from "react";

import "../styles/Sass/background.scss";

export const CertificateFormat = (props) => {
  return (
    <div style={{
        width:"50vw"
      }} key={props.id}>
      <div>{props.title}</div>
      <img
        style={{
          width:"100%",
          objectFit:"cover",
          
        }}
        src={require(`../images/${props.img}`)}
        alt={`${props.img}`}
      />
      <button
        className="checkout-button btn btn-success"
        target="_blank"
        rel="noopener noreferrer"
        href={props.href}
      >
        Check out
      </button>
    </div>
  );
};
