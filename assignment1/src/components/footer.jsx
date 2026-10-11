import React, { useEffect } from 'react'

const Footer = () => {



    return (
        <footer class="bd-footer py-4 py-md-5 mt-5 bg-dark text-light" >
            <div className="container py-4 py-md-5 px-4 px-md-3 text-light">
                <div class="row">
                    <div class="col-lg-3 mb-3">
                        <ul class="list-unstyled small">
                        </ul> </div>
                    <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5> <ul className="list-unstyled">
                            <li class="mb-2"><a href="/"  className="link-light text-decoration-none">Home</a></li>
                            <li class="mb-2"><a href="/docs/5.3/"  className="link-light text-decoration-none">Computer Science</a></li>
                            <li class="mb-2"><a href="/docs/5.3/examples"  className="link-light text-decoration-none">Courses</a></li> <li class="mb-2">
                                <a href="#"  className="link-light text-decoration-none">Reports</a></li>
                        </ul> 
                        <ul class="list-unstyled small">
                </ul> </div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                <h5>Contact info</h5> <ul class="list-unstyled">
                    <li class="mb-2"><a href="/"  className="link-light text-decoration-none">Contact Us</a></li>
                    <li class="mb-2">+1: 123 456 7890</li>
                    <li class="mb-2"><a href="/docs/5.3/examples"  className="link-light text-decoration-none">tm@studentportal.com</a></li> 
                </ul>
                        </div>

                </div>
               
            </div>

        </footer>
    )
}

export default Footer