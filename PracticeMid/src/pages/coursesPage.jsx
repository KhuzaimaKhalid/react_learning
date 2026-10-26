import React from 'react'
import Navbar from '../components/navbr'
import Footer from '../components/footer'

const CoursePage = () => {
    const courses = [
        {id:1, name:"Calculus", instructor:"Waqar Malik", creditHours:3, preRequisits:"Deficiency"},
        {id:2, name:"ITC", instructor:"Azad Chaiwala", creditHours:2, preRequisits:"Juice Making"},
        {id:3, name:"COAL", instructor:"GOAT", creditHours:2, preRequisits:"DLD"},
    ]
  return (
    <div>
        <Navbar />
      <table className="table table-hover mt-5">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Course</th>
      <th scope="col">Instructor Name</th>
      <th scope="col">Credit Hours</th>
      <th scope="col">Pre Requisits</th>
    </tr>
  </thead>
 
  <tbody>
  {courses.map((course,index)=>(
    <tr key={course.id}>
        <th scope='row'>{index+1}</th>
        <td>{course.name}</td>
        <td>{course.instructor}</td>
        <td>{course.creditHours}</td>
        <td>{course.preRequisits}</td>
    </tr>
  ))}
  </tbody>
</table>
<Footer />
    </div>
  )
}

export default CoursePage
