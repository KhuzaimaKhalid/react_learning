import React from 'react'
import Navbar from '../components/navbr'
import PageHeader from '../components/pageHeader'
import Breadcrumb from '../components/breadcrumb'
import Card from '../components/cards'
import Alert from '../components/alert'
import Footer from '../components/footer'

const HomePage = () => {

  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <PageHeader />
      <Card />
      <Alert />
      <Footer />
    </div>
  )
}

export default HomePage
