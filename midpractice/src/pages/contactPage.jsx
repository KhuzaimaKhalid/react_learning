import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const Contact = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-primary">Submit</button>
<Footer></Footer>
    </div>
  )
}

export default Contact
