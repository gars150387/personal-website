import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import { WhoAmI } from '../pages/WhoAmI';
import { MyBackground } from '../pages/MyBackground';
import { Contact } from '../pages/Contact';
import { Resume } from '../pages/Resume';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/whoami" element={<WhoAmI />} />
                <Route exact path="/mybackground" element={<MyBackground />} />
                <Route exact path='/resume' element={<Resume />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/project" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}
