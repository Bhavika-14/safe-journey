"use client"
import React,{ useState } from 'react'
import Navbar from './navbar'

const Login = ({setDashboard,user,setUser,setLogin}) => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const [loading,setLoading]=useState(false)

  const handleSubmit=async(e)=>{

    e.preventDefault()

    setLoading(true)

    var data={
      email:email,password:password
    }

    try{
      const response=await fetch("/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data) 
        
      })

      
      
      

      if(response.status===201){
        
        const res=await response.json()
        console.log("res",res)
        console.log("id",res.id)
        setUser(
          {
            firstname:res.firstname,
            lastName:res.lastname,
            email:res.email,
            id:res.id
          }
        )

        console.log(user)

       
    setLogin(false)
    setDashboard(true)

    }
  }
    catch(err){
      console.log(err)
    }

    setLoading(false)

    

    


  }


  return (
    <div>
      <div className='flex justify-center mt-12 sm:mt-16'>
        <div className='flex flex-col sm:w-[30%] '>

        {loading && <div className='w-[100%] justify-center px-1 py-2 text-blue-500 rounded-lg bg-blue-200 border-blue-500 border-2 text-center'>
          Loading...
        </div>}
            
  
            <div className='my-4 text-center sm:text-2xl text-xl'>Login</div>
  
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Email Address</label>
                        <input type='email' required className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col my-2 sm:my-4'>
                        <label className='mb-1'>Password</label>
                        <input type='password' required className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    
                    
                  <button className='text-center py-2 rounded-md my-6 bg-blue-500 text-white w-[100%]' onClick={handleSubmit}>Confirm</button>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Login