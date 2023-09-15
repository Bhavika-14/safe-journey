"use client"
import React,{ useState,useEffect } from 'react'
import Login from './login'
import Signup from './signup'
import Start from './start'
import Navbar from './navbar'

const First = () => {

  const [start,setStart]=useState(true)
  const [login,setLogin]=useState(false)
  const [signup,setSignup]=useState(false)

  return (
    <div>
    <Navbar setLogin={setLogin} setSignup={setSignup} setStart={setStart} />
    {start && <Start setLogin={setLogin} setSignup={setSignup} setStart={setStart} />}
    {login && <Login />}
    {signup && <Signup />}
    </div>
    
  )
}

export default First