import React from 'react'
import { Route, Routes } from 'react-router-dom'
// components
import Navbar from './components/navbar/Navbar'
import Card from './components/Card'
import Login from './components/login/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Card />} />
      </Routes>
    </>
  )
}

export default App
