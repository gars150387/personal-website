import React, { useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "@react-pdf-viewer/core/lib";
import "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";

import "../styles/Sass/resume.scss";

import { ScrollUp } from "../hooks/useScrollUp";
import PdfFile from "../pdf/Gustavo-Rodriguez-Software-Developer.pdf";

export const ResumeFile = () => {
  const [defaultPdfFile] = useState(PdfFile);

  return (
    <div className="pdf-container">
      <div>
        <Link to="/">
          <Button className="button-return">Return</Button>
        </Link>
      </div>
      <ScrollUp />
      <div className="pdf-file-container">
          {defaultPdfFile && (
        <>
          <div className="worker">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
              <Viewer className="viewer" fileUrl={defaultPdfFile} />
            </Worker>
          </div>
        </>
      )}
      </div>
    
    </div>
  );
};
