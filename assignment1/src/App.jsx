import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/homePage'
import CoursePage from './pages/coursePage'
import ReportPage from './pages/reportPage'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
      
    </BrowserRouter>


    </>
  )
}

export default App
