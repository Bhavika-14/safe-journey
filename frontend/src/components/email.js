import React from 'react'
import Navbar from './navbar'

const Email = ({setShowEmail,setShowVerification,email,setEmail}) => {

  const handleSubmit=(e)=>{
    e.preventDefault()
    setShowEmail(false)
    setShowVerification(true)

  }
  return (
   <div>
      
      <div className='flex justify-center my-32 '>
        <div className='flex flex-col sm:w-[30%] w-[80%]'>
            
  
            <div className='sm:my-4 text-center text-xl'>Enter your Email</div>
  
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col my-4'>
                        <label className='mb-1'>Email</label>
                        <input type='email' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                     
                    <div className='text-center py-2 rounded-md my-4 bg-gray-300 cursor-pointer'><button type='submit'>Continue</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Email