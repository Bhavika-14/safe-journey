import React from 'react'

const Password = ({setShowPassword,setShowProfile,password,setPassword,email}) => {

  const handleSubmit=()=>{
    setShowPassword(false)
    setShowProfile(true)
  }
  return (
    <div>
      
      <div className='flex justify-center my-32 '>
        <div className='flex flex-col sm:w-[30%] '>
            
  
            <div className='my-4 text-center text-xl'>Create Password</div>
  
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Password</label>
                        <input type='password' className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                     
                    <div className='text-center py-2 rounded-md my-4 bg-gray-300 cursor-pointer'><button type='submit'>Continue</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Password