import React from 'react'
import Navbar from './navbar'

const Login = ({setDashboard,user}) => {
  return (
    <div>
      <div className='flex justify-center my-32 '>
        <div className='flex flex-col sm:w-[30%] '>
            
  
            <div className='my-4 text-center text-2xl'>Login</div>
  
            <div>
                <form>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Email Address</label>
                        <input type='email' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Email Address' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Password</label>
                        <input type='password' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Password' />
                    </div>
                    
                    
                    <div className='text-center py-2 rounded-md my-6 bg-gray-300'><button>Confirm</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Login