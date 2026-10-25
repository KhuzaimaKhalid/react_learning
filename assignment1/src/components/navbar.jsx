import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
            <Link className="navbar-brand" to="/">StudentPortal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto " style={{ "--bs-scroll-height": "100px" }}>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link" href="#">Student</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Student
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark ">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> */}
                    <li className="nav-item">
                    <Link className="nav-link" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/reports">Reports</Link>
                    </li>
                    
                </ul>
                <div class="nav-item dropdown mx-3">
          <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Settings
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )
}

export default Navbar