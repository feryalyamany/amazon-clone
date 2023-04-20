import React from 'react'
import Header from './header/Header'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <>
     <Header/>
     <div style={{marginTop:71}}>
     <Outlet/>
     </div>
     
   
    </>
   
  )
}

export default RootLayout