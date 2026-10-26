import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import CoursePage from './pages/coursesPage'
import ContactPage from './pages/contactPage'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/courses' element={<CoursePage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
