import React from "react";
import { Row } from "react-bootstrap";
import { NavbarHeader } from "../components/Navbar";
import { ScrollUp } from "../hooks/useScrollUp";
import { Contact } from "./Contact";
import { MyBackground } from "./MyBackground";
import { Projects } from "./Projects";
import { WhoAmI } from "./WhoAmI";
// import { Experience } from './Experience'

export const MainPage = () => {
  return (
    <div className="container-fluid">
      <header>
        <NavbarHeader />
      </header>
      <hr />
      <Row>
        <section className="container" id="who">
          <WhoAmI />
          <br />{" "}
        </section>

        {/* <section className="container" id="experience">
          <Experience />
        </section>
        <br/> */}
        <section style={{marginTop:"8vh"}} className="container" id="projects">
          <Projects />
          <br />{" "}

        </section>
        <br />
        <section className="container" id="contact">
          <Contact />
        </section>
        <section className="container" id="background">
          <MyBackground />
        </section>
      </Row>
      <ScrollUp />
    </div>
  );
};
