import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'
import Navbar from '../components/navbar'
import Breadcrumb from '../components/breadcrumb'
import Card from '../components/card'
import Footer from '../components/footer'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar></Navbar>
<Breadcrumb></Breadcrumb>
<div className="d-flex justify-content-between align-items-center mb-4"style={{ paddingLeft: "7rem", paddingRight: "7rem" }}>
<div className="fs-3 fw-normal">Page Header</div>
    <button className="btn btn-primary">Add New Student</button>
</div>
<Card></Card>
<div style={{ paddingLeft: '150px', paddingRight: '150px' }}>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  Student records have been successfully updated.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div>
<Footer></Footer>
    </>
  )
}

