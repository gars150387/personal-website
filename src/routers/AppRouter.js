import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

import { Home } from '../pages/Home'
import { AuthRouter } from './AuthRouter';
import { RegisterScreen } from '../auth/RegisterScreen';
import { LoginScreen } from '../auth/LoginScreen';
import { WhoAmI } from '../pages/WhoAmI';
import { MyBackground } from '../pages/MyBackground';
import { Contact } from '../pages/Contact';
import { Resume } from '../pages/Resume';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/whoami" element={<WhoAmI />} />
                <Route exact path="/mybackground" element={<MyBackground />} />
                <Route exact path='/resume' element={<Resume />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/auth" element={<AuthRouter />}>
                    <Route
                        exact
                        path='register'
                        element={<RegisterScreen />}
                    />
                    <Route
                        exact
                        path='login'
                        element={<LoginScreen />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )

}
