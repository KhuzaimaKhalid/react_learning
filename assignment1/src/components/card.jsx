import React, { useEffect } from 'react'
import images from '../assets/images.jfif'

const Card = () => {



    return (
        <div>
            <div className='d-flex flex-row gap-3' style={{ paddingLeft: "15rem", paddingRight: "11rem" }}>
                <div className="card" style={{ width: "15rem" }}>
                    <img src={images} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Jane Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <a href="#" class="btn btn-outline-primary">View Profile</a>
                        <a href="#" class="btn btn-outline-danger">Delete</a>
                        <a href="#" class="btn btn-outline-danger d-block mx-0">.btn-outline-primary</a>
                    </div>
                </div>
                <div className="card" style={{ width: "15rem" }}>
                    <img src={images} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Mary Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <a href="#" class="btn btn-outline-primary">View Profile</a>
                        <a href="#" class="btn btn-outline-danger">Delete</a>
                        <a href="#" class="btn btn-outline-danger d-block mx-0">.btn-outline-primary</a>
                    </div>
                </div>
                <div className="card" style={{ width: "15rem" }}>
                    <img src={images} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Gant Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <a href="#" class="btn btn-outline-primary">View Profile</a>
                        <a href="#" class="btn btn-outline-danger">Delete</a>
                        <a href="#" class="btn btn-outline-danger d-block mx-0">.btn-outline-primary</a>
                    </div>
                </div>
                <div className="card" style={{ width: "15rem" }}>
                    <img src={images} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Amm Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <a href="#" class="btn btn-outline-primary">View Profile</a>
                        <a href="#" class="btn btn-outline-danger">Delete</a>
                        <a href="#" class="btn btn-outline-danger d-block mx-0">.btn-outline-primary</a>
                    </div>

                </div>

            </div>
            <nav  className='mt-3'aria-label="Page navigation example"style={{ paddingLeft: "40rem", paddingRight: "3rem" }}>
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>


    )
}

export default Card