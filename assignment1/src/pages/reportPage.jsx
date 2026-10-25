import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const reportPage = () => {
  return (
    <div>
         <Navbar></Navbar>
      <div className="mx-5 mt-5 mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mx-5 mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<Footer></Footer>
    </div>
  )
}

export default reportPage
