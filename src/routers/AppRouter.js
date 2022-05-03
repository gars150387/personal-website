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

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
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
