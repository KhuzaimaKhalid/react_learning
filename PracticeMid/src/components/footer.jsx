import React from "react";
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
        {" "}
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          {" "}
          <div class="row">
            {" "}
            
            <div class="col-6 col-lg-2 offset-lg-1 mb-3">
              {" "}
              <h5>Links</h5>{" "}
              <ul class="list-unstyled">
                {" "}
                <li class="mb-2">
                  <p href="/">Home</p>
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
                  <p
                    href="https://cottonbureau.com/people/bootstrap"
                    target="_blank"
                    rel="noopener"
                  >
                    Swag Store
                  </p>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            
            <div class="col-6 col-lg-2 offset-lg-1 mb-3"></div>

            <div class="col-6 col-lg-2 mb-3">
              {" "}
              <h5>Contact Info</h5>{" "}
              <ul class="list-unstyled">
                {" "}
                <li class="mb-2">
                  {" "}
                  <p
                    href="https://github.com/twbs/bootstrap/issues"
                    target="_blank"
                    rel="noopener"
                  >
                    Contact Us
                  </p>{" "}
                </li>{" "}
                <li class="mb-2">
                  {" "}
                  <Link to="/contact">Contact Info </Link>
                  {" "}
                </li>{" "}
                <li class="mb-2">
                  {" "}
                  <a
                    href="https://github.com/KhuzaimaKhalid"
                    target="_blank"
                    rel="noopener"
                  >
                    tm@studentportal.com
                  </a>{" "}
                </li>{" "}
               
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </footer>
    </div>
  );
};

export default Footer;
