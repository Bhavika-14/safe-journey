"use client"

import React from 'react'

const Navbar = ({setStart,setLogin,setSignup}) => {
  return (
    <div className='flex justify-between sm:my-8 sm:mx-32'>
       <div>SafeJourney</div>
       <div className='flex justify-between'>
          <div className='me-4 p-1' onClick={(e)=>{
          setStart(false)
          setLogin(true)
          setSignup(false)
          }
          }>Login</div>
          <div className='p-1 bg-gray-200 rounded-lg' onClick={(e)=>{
          setStart(false)
          setSignup(true)
          setLogin(false)
          }
          }>Signup</div>

       </div>
       
    </div>
  )
}

export default Navbar