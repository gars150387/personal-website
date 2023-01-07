import React from "react";
import { CertificationsData } from "./CertificationsData";
import { CertificateFormat } from "./CertificateFormat";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";

export const CertificationShow = ({ searchTerm }) => {
  return (
    <>
        {CertificationsData.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((item) => {
          return (
            <Col>
              <CertificateFormat
                key={item.id}
                title={item.title}
                company={item.company}
                href={item.href}
                img={item.img}
              />
            </Col>
          );
        })}
    </>
  );
};
