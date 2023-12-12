import React from 'react'
import { Route, Routes } from 'react-router-dom'
// components
import Navbar from './components/navbar/Navbar'
import Card from './components/Card/Card'
import Login from './views/login/Login'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Card />} />
      </Routes>
    </div>
  )
}
export default App
