import React from "react";
import { ContactMe } from "../components/ContactForm";

import "../styles/Sass/contact.scss";

export const Contact = () => {
  return (
    <>
      <div className="box-message">
        <div className="box-message-title">
          <h3>Let's chat, send me a message!</h3>
        </div>
        <ContactMe />
      </div>
    </>
  );
};
