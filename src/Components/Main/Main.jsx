import React from 'react'
import Header from '../Core/Header/Header'
import Footer from '../Core/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Main
