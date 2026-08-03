import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/login'
import About from './components/About'
import User from './components/User'
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


function MainLayout(){
  return(
    <>
    <Navbar/>
    <main>
      <Outlet />
    </main>
    </>
  )
}

function App() {
  const router = createBrowserRouter([
    {
    path:"/",
    element:<MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"login",
        element: <Login />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "user/:username",
        element: <User />
      }
    ]
  }
  
])
  return <RouterProvider router={router} />
}

export default App
