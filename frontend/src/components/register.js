import React from 'react'
import Navbar from './navbar'

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center sm:my-32 '>
        <div className='flex flex-col sm:w-[30%] '>
            
  
            <div className='sm:my-4 text-center'>Create your Profile</div>
  
            <div>
                <form>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>First name</label>
                        <input type='text' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='First Name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Last Name</label>
                        <input type='text' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Last Name' />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Date of Birth</label>
                        <input type='text' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Date of birth' />
                    </div>
                    <div className='my-1'>You must be atleast 18 years old to use SafeJourney</div>
                    <div className='text-center py-2 rounded-md my-4 bg-gray-200'><button>Confirm</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Register