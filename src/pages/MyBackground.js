import React from "react";

import { NavbarHeader } from "../components/Navbar";
import { CertificationShow } from '../components/CertificationShow'

import '../styles/mybackground.css'

export const MyBackground = (props) => {
    return (

        <div className="myBackground-body">
            <NavbarHeader />
            <CertificationShow key={props.id} />
        </div>
    )
}