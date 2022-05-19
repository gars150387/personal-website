import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyBackground } from '../pages/MyBackground'
import { Resume } from '../pages/Resume'


export const InnerRoute = () => {
    return (
        <>
            <Routes>
                <Route exact path='/certificates' element={<MyBackground />} />
                <Route exact path='/resume' element={<Resume />} />
            </Routes>

        </>
    )
}