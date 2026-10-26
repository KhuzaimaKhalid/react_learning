import React from "react";
import { useState } from "react";
import images from "../assets/images.jfif"

const Cards = () => {
    const [views, setviews] = useState([0,0,0,0])
    const [showDetails, setshowDetails] = useState([false,false,false,false])

    function handleView(index){
        const newindex = [...views]
        newindex[index] += 1
        setviews(newindex)
    }

    function toggleDetails(index){
        setshowDetails(prev=>
            prev.map((item,i)=>
            i === index ? !item : item)
        )
    }

  return (
    <div className="d-flex flex-row mt-2  gap-3">
      <div className="card " style={{ width: "25rem", height: "15 rem" }}>
      <img src={images} class="card-img-top" alt="..."></img>
        <div className="card-body text-start my-0">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">ID : 101</p>
          <p className="card-text">Major : Computer Science</p>
          <p className="card-text">Year : 2</p>
          <p className="card-text">GPA : 3.8</p>
          <p className="card-text">Profile Views : {views[0]}</p>
          <button className="btn btn-primary" onClick={()=>handleView(0)} >View Profile</button>
          <button className="btn btn-danger mx-2"> Delete Profile</button>
          <button className="btn btn-primary mt-2 mx-0" onClick={()=>toggleDetails(0)}>{showDetails[0] ? 'Hide Details':'Show Details'}</button>
          {showDetails[0] &&(
            <div className="mx-0">
                 <p><strong>Email:</strong>Student@example.com</p>
                 <p><strong>Phone:</strong>123456789</p>
            </div>
          )}
        </div>
      </div>
      <div className="card " style={{ width: "25rem", height: "15 rem" }}>
      <img src={images} class="card-img-top" alt="..."></img>
        <div className="card-body text-start my-0">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">ID : 101</p>
          <p className="card-text">Major : Computer Science</p>
          <p className="card-text">Year : 2</p>
          <p className="card-text">GPA : 3.8</p>
          <p className="card-text">Profile Views : {views[1]}</p>
          <button className="btn btn-primary" onClick={()=>handleView(1)} >View Profile</button>
          <button className="btn btn-danger mx-2"> Delete Profile</button>
          <button className="btn btn-primary mt-2 mx-0" onClick={()=>toggleDetails(1)}>{showDetails[1] ? 'Hide Details':'Show Details'}</button>
          {showDetails[1] &&(
            <div className="mx-0">
                 <p><strong>Email:</strong>Student@example.com</p>
                 <p><strong>Phone:</strong>123456789</p>
            </div>
          )}
        </div>
      </div>
      <div className="card " style={{ width: "25rem", height: "15 rem" }}>
      <img src={images} class="card-img-top" alt="..."></img>
        <div className="card-body text-start my-0">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">ID : 101</p>
          <p className="card-text">Major : Computer Science</p>
          <p className="card-text">Year : 2</p>
          <p className="card-text">GPA : 3.8</p>
          <p className="card-text">Profile Views : {views[2]}</p>
          <button className="btn btn-primary" onClick={()=>handleView(2)} >View Profile</button>
          <button className="btn btn-danger mx-2"> Delete Profile</button>
          <button className="btn btn-primary mt-2 mx-0" onClick={()=>toggleDetails(2)}>{showDetails[2] ? 'Hide Details':'Show Details'}</button>
          {showDetails[2] &&(
            <div className="mx-0">
                 <p><strong>Email:</strong>Student@example.com</p>
                 <p><strong>Phone:</strong>123456789</p>
            </div>
          )}
        </div>
      </div>
      <div className="card " style={{ width: "25rem", height: "15 rem" }}>
      <img src={images} class="card-img-top" alt="..."></img>
        <div className="card-body text-start my-0">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">ID : 101</p>
          <p className="card-text">Major : Computer Science</p>
          <p className="card-text">Year : 2</p>
          <p className="card-text">GPA : 3.8</p>
          <p className="card-text">Profile Views : {views[3]}</p>
          <button className="btn btn-primary" onClick={()=>handleView(3)} >View Profile</button>
          <button className="btn btn-danger mx-2"> Delete Profile</button>
          <button className="btn btn-primary mt-2 mx-0" onClick={()=>toggleDetails(3)}>{showDetails[3] ? 'Hide Details':'Show Details'}</button>
          {showDetails[3] &&(
            <div className="mx-0">
                 <p><strong>Email:</strong>Student@example.com</p>
                 <p><strong>Phone:</strong>123456789</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
