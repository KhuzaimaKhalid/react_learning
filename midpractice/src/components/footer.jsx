import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer class="bd-footer py-4 py-md-5 mt-5 bg-dark text-light">
        {" "}
        <div class="container py-4 py-md-5 px-4 px-md-3   text-light">
          {" "}
          <div class="row">
            {" "}
            
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              {" "}
              <h5>Links</h5>{" "}
              <ul class="list-unstyled">
                {" "}
                <li class="mb-2">
                 <Link className="navbar-brand" to="/">Home</Link>
                </li>{" "}
                <li class="mb-2">
                  <p href="/docs/5.3/">Docs</p>
                </li>{" "}
                <li class="mb-2">
                  <p href="/docs/5.3/examples">Examples</p>
                </li>{" "}
                <li class="mb-2">
                  <p href="https://icons.getbootstrap.com/">Icons</p>
                </li>{" "}
                <li class="mb-2">
                  <p href="https://blog.getbootstrap.com/">Blog</p>
                </li>{" "}
                <li class="mb-2">
                  
                </li>{" "}
              </ul>{" "}
            </div>{" "}
           
            <div class="col-6 col-lg-2 offset-lg-1 mb-3"></div>
            <div class="col-6 col-lg-2 offset-lg-1 mb-3"></div>
            <div class="col-6 col-lg-2 mb-3">
              {" "}
              <h5>Contact Info</h5>{" "}
              <ul class="list-unstyled">
                {" "}
                <li class="mb-2">
                  {" "}
                  
                  <Link className="navbar-brand" to="/contact">Contact Page</Link>
                  {" "}
                </li>{" "}
                <li class="mb-2">
                  {" "}
                 
                  +123456
                  {" "}
                </li>{" "}
                <li class="mb-2">
                  {" "}
                  <p
                    href="https://github.com/sponsors/twbs"
                    target="_blank"
                    rel="noopener"
                  >
                    info@studentportals.com
                  </p>{" "}
                </li>{" "}
                
                
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>
      ;
    </div>
  );
};

export default Footer;
