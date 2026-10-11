import React, { useEffect } from 'react'

const Breadcrumb = () => {



    return (
        <div className='container mt-3'>
<nav className="bg-dark p-3 rounded" data-bs-theme="dark" style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">.breadcrumb</li>
      <li className="breadcrumb-item active" aria-current="page">breadcrumb-item</li>
      <li className="breadcrumb-item active" aria-current="page">Home</li>
      <li className="breadcrumb-item active" aria-current="page">Students</li>
      <li className="breadcrumb-item active"><a href="/directory">Directory</a></li>
    </ol>
</nav>
        </div>
    )
}

export default Breadcrumb