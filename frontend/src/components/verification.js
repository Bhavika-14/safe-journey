import React from 'react'
import Navbar from './navbar'

const Verification = () => {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center sm:my-32 '>
        <div className='flex flex-col sm:w-[30%] '>
            
  
            <div className='sm:mt-4 text-center sm:text-2xl'>Confirm your email address</div>
            <div className='sm:mb-4 sm:mt-2 text-center'>Enter the 4-digit code sent to your email</div>
            <div className='bg-green-800 border-s-black200 text-center'>
            <div className='flex text-center justify-center bg-red-800 sm:w-[50%]'>
                <div><input type='text' className='bg-gray-200 w-[10%]'/></div>
                <div><input type='text' className='bg-gray-200 w-[10%]'/></div>
                <div><input type='text' className='bg-gray-200 w-[10%]'/></div>
                <div><input type='text' className='bg-gray-200 w-[10%]'/></div>

            </div>
            </div>
  
            <div>
                <form>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Email</label>
                        <input type='email' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Email' />
                    </div>
                     
                    <div className='text-center py-2 rounded-md my-4 bg-gray-200'><button>Continue</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Verification