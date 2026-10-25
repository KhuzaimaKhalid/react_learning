import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/homePage'
import Course from './pages/coursePage'
import Contact from './pages/contactPage'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
