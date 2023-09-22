import React from 'react'

const CompleteSignup = ({setShowCompleteSignup,image,user,setDashboard}) => {
  const handleClick=()=>{
    setShowCompleteSignup(false)
    setDashboard(true)
  }
  return (
    <div className='flex justify-center'>
    <div className='sm:w-[30%] w-[85%]'>
        <div className='text-center my-4 sm:text-3xl text-lg'>
            Thanks for adding your photo!

        </div>

        <div className='flex justify-center my-8'>
            {image && <img src={URL.createObjectURL(image)} className='rounded-full h-36 w-36 object-cover border-solid border-black border-2' />}
            {!image && <div className='rounded-full h-36 w-36 bg-gray-300' />}
        </div>

        

        <div className='my-4'>
            You're now ready to find a travel partner.
        </div>

        <div className='text-center bg-gray-300 py-2 px-2 rounded-md my-4 cursor-pointer' onClick={handleClick}>Continue</div>

    </div>

</div>
  )
}

export default CompleteSignup