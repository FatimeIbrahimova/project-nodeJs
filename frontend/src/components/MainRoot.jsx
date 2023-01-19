import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const MainRoot = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainRoot
