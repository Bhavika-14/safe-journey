import React from 'react'
import Navbar from './navbar'

const Start = ({setSignup,setLogin,setStart}) => {
  return (
    <div>
      
      <div className='flex justify-center my-48'>
        <div className='flex flex-col justify-center text-center'>
            
  
            <div className='sm:my-4 my-4'>Find someone to travel safely with</div>
  
            <div><button className='px-2 rounded-md py-1 bg-gray-300' onClick={(e)=>{
          setStart(false)
          setLogin(false)
          setSignup(true)
          }
          }>Get Started</button></div>
  
        </div>
      </div>
    </div>
  )
}

export default Start