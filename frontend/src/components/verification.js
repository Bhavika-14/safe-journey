"use client"
import React,{ useState } from 'react'

const Verification = ({setShowVerification,setShowPassword}) => {

  const [notCorrect,setNotCorrect]=useState(false)

  const handleClick=()=>{
    setShowVerification(false)
    setShowPassword(true)

  }
  return (
    <div>
      
      <div className='flex justify-center sm:my-32 my-8 '>
        <div className='flex flex-col sm:w-[30%] w-[80%] '>
            
  
            <div className='mt-4 text-center sm:text-2xl '>Confirm your email address</div>
            <div className='mb-4 mt-4 text-center'>Enter the 4-digit code sent to your email</div>
            <div className='border-s-black text-center'>
            <div className='flex text-center justify-center'>
              <div className='sm:w-[50%] flex'>
                <div><input type='text' className='bg-gray-300 w-12 h-12 mx-1 rounded-md'/></div>
                <div><input type='text' className='bg-gray-300 w-12 h-12 mx-1 rounded-md'/></div>
                <div><input type='text' className='bg-gray-300 w-12 h-12 mx-1 rounded-md'/></div>
                <div><input type='text' className='bg-gray-300 w-12 h-12 mx-1 rounded-md'/></div>
              </div>
            </div>
            </div>
  
            <div className='text-center py-2 rounded-md my-4 bg-gray-300 cursor-pointer' onClick={handleClick}>Continue</div>

            {!notCorrect && <div>Didn't receive a code? Click here to resend</div>}
            {notCorrect && <div>Incorrect Code. Click here to resend</div>}
                
  
        </div>
      </div>
    </div>
  )
}

export default Verification