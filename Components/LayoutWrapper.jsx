import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'


export default function ({children}) {
  return (
    <div>
         <Navbar></Navbar>
        {children}
           <Footer></Footer>
    </div>
  )
}
