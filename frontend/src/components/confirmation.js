import React from 'react'

const Confirmation = ({setConfirmation,setResult}) => {

  const handleClick=()=>{
    setConfirmation(false)
    setResult(true)
  }
  return (
    <div className='flex justify-center sm:mt-4'>
        <div className='w-[85%]'>
        <div className='my-4 text-center text-xl'>Confirm details</div>
        <div><input type='text' className='text-black bg-gray-300 px-2 py-1 my-2 rounded-md w-[100%]' id="meetingpoint" placeholder='Where do you want to meet?' /></div>

        
        <div><input type='text' className='text-black bg-gray-300 px-2 py-1 my-2 rounded-md w-[100%]' id="destinationpoint" placeholder='Where do you want to go?' /></div>
        <div className='bg-gray-300 p-2 rounded-lg  text-center my-4 cursor-pointer' onClick={handleClick}>Find travel partner</div>
        </div>
    </div>
  )
}

export default Confirmation