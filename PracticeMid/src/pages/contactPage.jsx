import React from 'react'

const ContactPage = () => {

    function handleSubmit(event) {
        event.preventDefault();
        const passwordValue = event.target.querySelector('#inputPassword5').value.trim();
        if (passwordValue === '') {
            window.alert('Please enter a password before submitting!');
            return;
        }
        window.alert('Form submitted!');
        event.target.reset()
      }
  return (
    <div>
   <form onSubmit={handleSubmit}>
   <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
</div>
<label for="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
   </form>
    </div>
  )
}

export default ContactPage
