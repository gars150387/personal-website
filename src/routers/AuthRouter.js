import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { RegisterScreen } from '../auth/RegisterScreen'
import { LoginScreen } from '../auth/LoginScreen'

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='/register'
          element={<RegisterScreen />}
        />
        <Route
          path='/login'
          element={<LoginScreen />}
        />
      </Routes>

    </>
  )
}
