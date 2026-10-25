import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const coursePage = () => {
    const courses = [
        { id: 1, name: 'Calculus', instructor: 'Prinkle Kella', credits: 3, prerequisite: 'Deficiency' },
        { id: 2, name: 'DSA', instructor: 'Yasir Idrees Khan', credits: 3, prerequisite: 'OOP' },
        { id: 3, name: 'Azad Chai Wala', instructor: 'ITC', credits: 2, prerequisite: 'Juice Making' },
        { id: 4, name: 'DBMS', instructor: 'Abdul Wasiq', credits: 3, prerequisite: 'DSA' },
        { id: 5, name: 'Probability & Statistics', instructor: 'Prinkle Maheshwari', credits: 3, prerequisite: 'Calculus' },
        { id: 6, name: 'AI', instructor: 'Shahrukh Khan', credits: 3, prerequisite: 'N/A' },
        { id: 7, name: 'Data Science', instructor: 'Umm e Farwa', credits: 3, prerequisite: 'N/A' },
        { id: 8, name: 'COAL', instructor: 'GOAT', credits: 3, prerequisite: 'DLD' },
    ]
    return (
        <div className='course-page'>
            <div className='course-container px-5 '>
                <Navbar></Navbar>
                <table className="table table-hover my-5" >
                    <thead>
                        <tr className=''>
                            <th scope="col">#</th>
                            <th scope="col">Instructor</th>
                            <th scope="col">Course</th>
                            <th scope="col">Credit Hours</th>
                            <th scope="col">Pre Requisit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={course.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{course.name}</td>
                                <td>{course.instructor}</td>
                                <td>{course.credits}</td>
                                <td>{course.prerequisite}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
            <div className="gap-5">
                <div className="d-flex gap-2 mb-3">
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSchedule" aria-expanded="false" aria-controls="collapseSchedule">
                        Class Schedule
                    </button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConsultation" aria-expanded="false" aria-controls="collapseConsultation">
                        PM Consulation
                    </button>
                </div>
                <div style={{ minHeight: '120px' }} >
                    <div className="collapse collapse-horizontal" id="collapseSchedule">
                        <div className="card card-body" style={{ width: '300px' }}>
                            Class Schedule is Updated
                        </div>
                    </div>
                </div>

                <div style={{ minHeight: '120px' }}>
                    <div className="collapse collapse-horizontal" id="collapseConsultation">
                        <div className="card card-body" style={{ width: '300px' }}>
                            Ya to meri domain me hi nahi ha
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default coursePage
