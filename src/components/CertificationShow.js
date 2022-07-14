import React from "react";
import { CertificationsData } from "./CertificationsData";
import { CertificateFormat } from "./CertificateFormat";
import "bootstrap/dist/css/bootstrap.min.css";

export const CertificationShow = ({ searchTerm }) => {
  return (
    <>
      <div className="justify-content-center">
        <div className="certificate-container">
          {CertificationsData.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((item) => {
            return (
              <CertificateFormat
                key={item.id}
                title={item.title}
                company={item.company}
                href={item.href}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

//<FaList /> list
//<FaMicrosoft /> square
