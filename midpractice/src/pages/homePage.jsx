import React from 'react'
import Navbar from '../components/navbar'
import Bradcrumb from '../components/bradcrumb'
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer'
import Alert from '../components/alert'
import Card from '../components/card'

const homePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Bradcrumb></Bradcrumb>
        <PageHeader></PageHeader>
        <Card></Card>
        <Alert></Alert>
        <Footer></Footer>
    </div>
  )
}

export default homePage
