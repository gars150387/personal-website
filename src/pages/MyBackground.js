import React, { useState } from "react";

import { CertificationShow } from "../components/CertificationShow";

import "../styles/Sass/background.scss";

export const MyBackground = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div>
        {" "}
        <div className="search-input">
          <input
            name="value"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search my certificate here!"
          />
        </div>
      </div>{" "}
      {/* <div> */}
        <div className="container-certification-show">
          <CertificationShow
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            key={props.id}
          />
        </div>{" "}
      {/* </div> */}
    </>
  );
};
