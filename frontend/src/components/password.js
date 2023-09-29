import React from 'react'

const Password = ({setShowPassword,setShowProfile,password,setPassword,email}) => {

  const handleSubmit=()=>{
    setShowPassword(false)
    setShowProfile(true)
  }
  return (
    <div>
      
      <div className='flex justify-center sm:my-32 my-24 '>
        <div className='flex flex-col sm:w-[30%] '>
            
  
            <div className='my-4 text-center text-xl sm:text-2xl'>Create Password</div>
  
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col my-2'>
                        <label className='mb-1'>Password</label>
                        <input type='password' required className='rounded-md text-black py-2 px-1 border-solid border-2 border-gray-900' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                     
                    <div><button className='text-center py-2 rounded-md my-4 bg-blue-500 text-white cursor-pointer w-[100%]' type='submit'>Continue</button></div>
                </form>
                
            </div>
  
        </div>
      </div>
    </div>
  )
}

export default Password