import React from 'react'
import Navbar from './navbar'

const Start = ({setSignup,setLogin,setStart}) => {
  return (
    <div>
      
      <div className='flex justify-center my-32 sm:my-32'>
        <div className='flex flex-col justify-center text-center'>
            
            <div className='sm:mt-4 mt-4 text-blue-500 font-bold sm:text-4xl text-2xl '>SafeJourney</div>
            <div className='sm:mt-2 mb-4 sm:text-xl'>Commute Together</div>
  
            <div><button className='px-4 rounded-md py-2 sm:mt-16 mt-8 bg-blue-500 text-white' onClick={(e)=>{
          setStart(false)
          setLogin(false)
          setSignup(true)
          }
          }>Get Started</button></div>

          <div><button className='px-2 rounded-md py-1 sm:mt-4 mt-2 bg-white text-blue-500 border-blue-500 border-2' onClick={(e)=>{
          setStart(false)
          setLogin(true)
          setSignup(false)
          }
          }>Log In</button></div>
  
        </div>
      </div>
    </div>
  )
}

export default Start 