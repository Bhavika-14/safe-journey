"use client"

import React from 'react'

const Navbar = ({setStart,setLogin,setSignup}) => {
  return (
    <div className='flex justify-between sm:my-8 sm:mx-32 mx-2 my-4 '>
       <div className='text-blue-500 sm:text-3xl text-bold text-xl'>SafeJourney</div>
       <div className='flex justify-between '>
          <div className='sm:me-4 me-2 p-1 cursor-pointer bg-white text-blue-500 border-blue-500 border-2 rounded-md sm:my-1 sm:py-2 sm:px-4' onClick={(e)=>{
          setStart(false)
          setLogin(true)
          setSignup(false)
          }
          }>Login</div>
          <div className='p-1 bg-blue-500 rounded-md cursor-pointer text-white sm:px-4 sm:my-1 sm:py-2' onClick={(e)=>{
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