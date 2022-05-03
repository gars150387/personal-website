import React from "react";
import { ResumeFile } from "../components/ResumeFile";
// import SinglePagePDFViewer from "./components/pdf/single-page";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/

export const Resume = ()=> {
  return (
    <div className="">
      <ResumeFile />
    </div>
  );
}