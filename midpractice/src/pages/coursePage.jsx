import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Course = () => {

    const courses = [
       {id: 1, name: 'Entrepreneurship', instructor: 'Azad Chaiwala', preRequisits:'Juice Making'},
       { id: 2, name: "Calculus", instructor: "Waqar Malik", preRequisits:"Deficiency"},
       { id: 3, name: "COAL", instructor: "GOAT", preRequisits:"DLD"}
    ]
  return (
    <div className='px-5'>
        <Navbar></Navbar>
      <table className="table table-hover my-5">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">Course Name</th>
      <th scope="col">Instructor Name</th>
      <th scope="col">Pre Requisits</th>
    </tr>
  </thead>
  <tbody>
    {courses.map((course,index)=>(
        <tr key={course.id}>
            <th scope="row">{index+1}</th>
            <td>{course.name}</td>
            <td>{course.instructor}</td>
            <td>{course.preRequisits}</td>
        </tr>
    ))}
  </tbody>
</table>
<Footer></Footer>
    </div>
  )
}

export default Course
