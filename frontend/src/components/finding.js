import React from 'react'

const Finding = ({setFinding,setConfirmation,setPickupLocation,setDropoffLocation}) => {

  const handleClick=()=>{
    setFinding(false)
    setConfirmation(true)
  }
  return (
    <div className='flex justify-center sm:mt-4'>
        <div className='w-[85%]'>
        <div className='sm:my-4 mt-2 text-center sm:text-xl text-md'>Find a travel partner</div>
        <div><input type='text' required className='text-black shadow-xl border-black border-2  bg-white px-2 py-1 sm:my-2 my-1 rounded-md w-[100%]' id="meetingpoint" placeholder='Where do you want to meet?' onChange={(e)=>{setPickupLocation(e.target.value)}} /></div>

        
        <div><input type='text' required className='text-black shadow-xl border-black border-2  bg-white px-2 py-1 sm:my-2 my-1 rounded-md w-[100%]' id="destinationpoint" placeholder='Where do you want to go?' onChange={(e)=>{setDropoffLocation(e.target.value)}} /></div>
        <div className='bg-blue-500 text-white p-2 rounded-lg  text-center sm:my-4 cursor-pointer mt-2' onClick={handleClick}>Find travel partner</div>
        </div>
    </div>
  )
}

export default Finding