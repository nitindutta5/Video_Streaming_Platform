import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
    const isMenuOpen = useSelector((store) => store?.app?.isMenuOpen);
  return (
    <div className='flex relative top-20'>
       {isMenuOpen && <Sidebar/>}
        {/* <MainContainer/> */}
        <Outlet />
    </div>
  )
}

export default Body