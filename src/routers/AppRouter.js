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


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/whoami" element={<WhoAmI />} />
                <Route exact path="/mybackground" element={<MyBackground />} />
                <Route exact path='/resume' element={<Resume />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )

}
