import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [from, setFrom] = useState({})

  const handleMouseOver = () => {
    alert("Hey I am a mouse over")
  }

  const handleClick = () => {
    alert("Hey I am clicked")
  }

  const handleChange = (e) =>{
    setFrom({...from,[e.target.name]:e.target.value})
    console.log(from)
  }


  return (
    <>
    <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div>

      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <input type="text" name='email' value={from.email?from.email:""} onChange={handleChange} />
      <input type="phone" name='phone' value={from.phone?from.phone:""} onChange={handleChange} />
      <input type="text" name='name' value={from.name?from.name:""} onChange={handleChange} />
    </>
  )
}

export default App
