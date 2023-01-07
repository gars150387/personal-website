import React from "react";
import { CertificationsData } from "./CertificationsData";
import { CertificateFormat } from "./CertificateFormat";

export const CertificationShow = ({ searchTerm }) => {
  return (
    <>
        {CertificationsData.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((item) => {
          return (
            <div style={{margin:"0 auto"}}>
              <CertificateFormat
                key={item.id}
                title={item.title}
                company={item.company}
                href={item.href}
                img={item.img}
              />
            </div>
          );
        })}
    </>
  );
};
