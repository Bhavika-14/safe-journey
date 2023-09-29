"use client"
import React,{ useState,useEffect } from 'react'

const Confirmation = ({setConfirmation,setResult,setFinding,getPickupCoordinates,getDropoffCoordinates,pickupLocation,dropoffLocation}) => {
   
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    console.log("hello")
     getPickupCoordinates()
     getDropoffCoordinates()
  }
  ,[])

  const handleClick=()=>{
    setLoading(true)
    //setConfirmation(false)
    //setResult(true)
  }

  const handleBack=()=>{
    setConfirmation(false)
    setFinding(true)
  }
  return (
    <div className='flex justify-center sm:mt-4'>
        <div className='w-[85%]'>
        {!loading &&<>
        <div className='sm:my-4 my-1 text-center text-xl sm:text-2xl'>Confirm Journey</div>
        <div className='text-blue-500'>Meeting point</div>
        <div className='text-black shadow-xl border-blue-500 border-2 text-center  bg-white px-2 py-1 sm:my-2 my-2 rounded-md w-[100%]'>{pickupLocation}</div>

        <div className='mt-4 text-blue-500'>Destination</div>
        <div className='text-black shadow-xl border-blue-500 border-2 text-center  bg-white px-2 py-1 sm:my-2 my-2 rounded-md w-[100%]'>{dropoffLocation}</div>
        <div className='bg-blue-500  text-white p-2 rounded-lg  text-center sm:my-4 mt-2 cursor-pointer' onClick={handleClick}>Find travel partner</div>
        <div className='bg-blue-500  text-white p-2 rounded-lg  text-center sm:my-4 mt-2 cursor-pointer' onClick={handleBack}>Back</div>
        </>
        }

        {loading && <div className='sm:text-2xl sm:mt-16 mt-16 text-center'>
          Finding Travel Partner...

          <svg class="animate-spin h-5 w-5 ... color-black text-center" viewBox="0 0 24 24">  </svg>



        </div>
          }
      
        </div>
    </div>
  )
}

export default Confirmation