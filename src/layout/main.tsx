import React from 'react'
import Navbar from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className=" absolute w-full h-full ">
      <Navbar />

      <Outlet />
    </div>
  )
}

export default Main
