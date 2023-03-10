import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { Register } from "../pages/register"

export const RoutsMain = () => {

    return (
        <Routes >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
            
            <Route path="*" element={<Navigate to={'/login'} />} />
        </Routes>
    )
}

