import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Login from './views/login/Login'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
