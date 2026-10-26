import React from 'react'

const Breadcrumb = () => {
  return (
    <div className='mt-3'>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
    </div>
  )
}

export default Breadcrumb
