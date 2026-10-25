import React, { useEffect, useState } from 'react'
import images from '../assets/images.jfif'

const Card = () => {

    const [details, showDetails] = useState(false);
    const [views, setViews] = useState([0, 0, 0, 0]);

    function handleViews(index) {
        const newViews = [...views];
        newViews[index] += 1;
        setViews(newViews);
    }

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
                        <p className="mb-0">Profile Views: {views[0]}</p>
                        <button onClick={() => handleViews(0)} className="btn btn-outline-primary">View Profile </button>
                        <a href="#" className="btn btn-outline-danger">Delete</a>
                        <button onClick={() => showDetails(!details)} className="btn btn-outline-danger d-block mx-0" > {details ? 'Hide Details' : 'Show Details'}</button>
                        {details && (
                            <div className="mt-3">
                                <p>
                                    <strong>Email:</strong> student@example.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> 0300-1234567
                                </p>
                            </div>
                        )}
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
                        <p className="mb-0">Profile Views: {views[1]}</p>
                        <button onClick={() => handleViews(1)} className="btn btn-outline-primary">View Profile</button>
                        <a href="#" className="btn btn-outline-danger">Delete</a>
                        <button onClick={() => showDetails(!details)} className="btn btn-outline-danger d-block mx-0" > {details ? 'Hide Details' : 'Show Details'}</button>
                        {details && (
                            <div className="mt-3">
                                <p>
                                    <strong>Email:</strong> student@example.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> 0300-1234567
                                </p>
                            </div>
                        )}
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
                        <p className="mb-0">Profile Views: {views[2]}</p>
                        <button onClick={() => handleViews(2)} className="btn btn-outline-primary">View Profile </button>
                        <a href="#" className="btn btn-outline-danger">Delete</a>
                        <button onClick={() => showDetails(!details)} className="btn btn-outline-danger d-block mx-0" > {details ? 'Hide Details' : 'Show Details'}</button>
                        {details && (
                            <div className="mt-3">
                                <p>
                                    <strong>Email:</strong> student@example.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> 0300-1234567
                                </p>
                            </div>
                        )}
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
                        <p className="mb-0">Profile Views: {views[3]}</p>
                        <button onClick={() => handleViews(3)} className="btn btn-outline-primary">View Profile</button>
                        <a href="#" className="btn btn-outline-danger">Delete</a>
                        <button onClick={() => showDetails(!details)} className="btn btn-outline-danger d-block mx-0" > {details ? 'Hide Details' : 'Show Details'}</button>
                        {details && (
                            <div className="mt-3">
                                <p>
                                    <strong>Email:</strong> student@example.com
                                </p>
                                <p>
                                    <strong>Phone:</strong> 0300-1234567
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <nav className='mt-3' aria-label="Page navigation example" style={{ paddingLeft: "40rem", paddingRight: "3rem" }}>
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Card