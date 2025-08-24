import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage' 
import LoginPage from './pages/LoginPage'
import Profilepage from './pages/Profilepage'
const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain ">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profilepage />} />
      </Routes>
    </div>
  )
}

export default App
