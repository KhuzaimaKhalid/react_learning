import React, { useState } from 'react'
import image from '../assets/images.jfif'

const Card = () => {

    const [views, setViews] = useState([0, 0, 0, 0]);
    const [details, showDetails] = useState([false,false,false,false])

    function handleViews(index) {
        const newViews = [...views]
        newViews[index] += 1
        setViews(newViews)
    }

    function toggleDetails(index){
        showDetails(prev=>
            prev.map((value,i)=>
                i === index ? !value: value
            )
        )
    }


    return (
        <div>
            <div className="d-flex flex-row">
                <div className="card mx-2" style={{ width: "25rem", height: "15 rem" }}>
                    <img src={image} class="card-img-top" alt="..."></img>
                    <div className="card-body text-start my-auto" >
                        <h5 className="card-title">Jane Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <p className="mb-0">Profile Views: {views[0]}</p>
                        <button  className="btn btn-primary " onClick={() => handleViews(0)}>View Profile</button>
                        <button className="btn btn-danger mx-2">Delete Profile</button>
                        <button onClick={() => toggleDetails(0)} className="btn btn-primary mt-2">{details[0] ? 'Hide Details' : 'Show Details'}</button>
                        {details[0] && (
                            <div className="">
                                <p><strong>Email:</strong>Student@example.com</p>
                                <p><strong>Phone:</strong>123456789</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card mx-2" style={{ width: "25rem", height: "15 rem" }}>
                    <img src={image} class="card-img-top" alt="..."></img>
                    <div className="card-body text-start my-auto" >
                        <h5 className="card-title">Jane Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <p className="mb-0">Profile Views: {views[1]}</p>
                        <button className="btn btn-primary " onClick={() => handleViews(1)}>View Profile</button>
                        <button className="btn btn-danger mx-2">Delete Profile</button>
                        <button onClick={() => toggleDetails(1)} className="btn btn-primary mt-2">{details[1] ? 'Hide Details' : 'Show Details'}</button>
                        {details[1] && (
                            <div className="">
                                <p><strong>Email:</strong>Student@example.com</p>
                                <p><strong>Phone:</strong>123456789</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card mx-2" style={{ width: "25rem", height: "15 rem" }}>
                    <img src={image} class="card-img-top" alt="..."></img>
                    <div className="card-body text-start my-auto" >
                        <h5 className="card-title">Jane Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <p className="mb-0">Profile Views: {views[2]}</p>
                        <button className="btn btn-primary " onClick={() => handleViews(2)}>View Profile</button>
                        <button className="btn btn-danger mx-2">Delete Profile</button>
                        <button onClick={() => toggleDetails(2)} className="btn btn-primary mt-2">{details[2] ? 'Hide Details' : 'Show Details'}</button>
                        {details[2] && (
                            <div className="">
                                <p><strong>Email:</strong>Student@example.com</p>
                                <p><strong>Phone:</strong>123456789</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card mx-2" style={{ width: "25rem", height: "15 rem" }}>
                    <img src={image} class="card-img-top" alt="..."></img>
                    <div className="card-body text-start my-auto" >
                        <h5 className="card-title">Jane Doe</h5>
                        <p className="mb-0">ID: 101</p>
                        <p className="mb-0">Major: Computer Science</p>
                        <p className="mb-0">Year: 2</p>
                        <p className="mb-0">GPA: 3.8</p>
                        <p className="mb-0">Profile Views: {views[3]}</p>
                        <button className="btn btn-primary " onClick={() => handleViews(3)}>View Profile</button>
                        <button className="btn btn-danger mx-2">Delete Profile</button>
                        <button onClick={() => toggleDetails(3)} className="btn btn-primary mt-2">{details[3] ? 'Hide Details' : 'Show Details'}</button>
                        {details[3] && (
                            <div className="">
                                <p><strong>Email:</strong>Student@example.com</p>
                                <p><strong>Phone:</strong>123456789</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
