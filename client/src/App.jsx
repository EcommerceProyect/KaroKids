import React from 'react'
import Navbar from './components/navbar/Navbar'
import Card from './components/Card'

import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card />
    </>
  )
}

export default App
