import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
function Layout() {
  return (<>
   <div className="bg-teal2 h-4"></div>
<Navbar/>
<Outlet/>
<Footer/>
</>
  )
}

export default Layout