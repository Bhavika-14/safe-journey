"use client"
import React,{ useState,useEffect } from 'react'
import Login from './login'
import Signup from './signup'
import Start from './start'
import Navbar from './navbar'
import Profile from './profile'
import CompleteSignup from './completeSignup'
import Verification from './verification'
import Dashboard from './dashboard'

const First = () => {

  const [start,setStart]=useState(true)
  const [login,setLogin]=useState(false)
  const [signup,setSignup]=useState(false)
  const [dashboard,setDashboard]=useState(false)
  const [user,setUser]=useState(null)

  return (
    <div>
    <Navbar setLogin={setLogin} setSignup={setSignup} setStart={setStart} />
    {start && <Start setLogin={setLogin} setSignup={setSignup} setStart={setStart} />}
    {login && <Login setDashboard={setDashboard} user={user} />}
    {signup && <Signup setDashboard={setDashboard} user={user} />}
    {dashboard && <Dashboard user={user} />}
    </div>

    
  )
}

export default First