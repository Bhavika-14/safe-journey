import React from 'react'
import Navbar from './navbar'

const Register = ({setShowRegister,setShowEmail,firstName,lastName,dob,setFirstName,setLastName,setdob}) => {


  const handleSubmit=(e)=>{
    e.preventDefault()
    setShowRegister(false)
    setShowEmail(true)
  }
  return (
    <div>
      
      <div className='flex justify-center my-32 '>
        <div className='flex flex-col sm:w-[30%] w-[80%] '>
            
  
            <div className='my-4 text-center text-xl'>Create your Profile</div>
  
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>First name</label>
                        <input type='text' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Last Name</label>
                        <input type='text' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Date of Birth</label>
                        <input type='date' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Date of birth' onChange={(e)=>setdob(e.target.value)} />
                    </div>
                    <div className='my-2'>You must be atleast 18 years old to use SafeJourney</div>
                    <div className='text-center py-2 rounded-md my-4 bg-gray-300 cursor-pointer'><button type="submit">Confirm</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Register