import RootNav from 'components/RootNav'
import React from 'react'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <RootNav/>
        <Outlet/>
    </div>
  )
}

export default RootLayout