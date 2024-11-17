import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className=" absolute w-screen h-screen overflow-hidden">
      <Navbar />

      <Outlet />
    </div>
  )
}

export default Main
