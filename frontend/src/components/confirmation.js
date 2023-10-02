"use client"
import React,{ useState,useEffect } from 'react'
import { doc, setDoc,updateDoc,onSnapshot,arrayUnion,getDoc } from "firebase/firestore";
import { db } from '@/app/firebase'
import {v4 as uuid} from "uuid"

const Confirmation = ({setConfirmation,setResult,setFinding,getPickupCoordinates,getDropoffCoordinates,pickupLocation,dropoffLocation,pickupCoordinates,dropoffCoordinates,user,setRequestID}) => {
   
  
  useEffect(()=>{
    console.log("hello")
     getPickupCoordinates()
     getDropoffCoordinates()

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }
  ,[])

  const handleClick=async()=>{
  

    let route;

    try{
      const data={
        a_id:user.id,
            a_firstname:user.firstname,
            a_lastname:user.lastname,
            meeting: pickupCoordinates,
            destination: dropoffCoordinates
      }

      console.log(data)

      const requestid=''+pickupCoordinates[0]+pickupCoordinates[1]+dropoffCoordinates[0]+dropoffCoordinates[1]
      setRequestID(requestid)

      const res=await getDoc(doc(db,"requests",requestid))
        console.log(res)

        if(!res.exists()){

          await setDoc(doc(db,"requests",requestid),{routes:[]})
          console.log("completed")

        }

        const response=await getDoc(doc(db,"users",user.id))
        const photourl=response._document.data.value.mapValue.fields.photoURL.stringValue
        console.log(photourl)

        
      await updateDoc(doc(db,"requests",requestid),{
        routes:arrayUnion(
          {
            id:uuid(),
            a_id:user.id,
            a_firstname:user.firstname,
            a_lastname:user.lastname,
            meeting: pickupCoordinates,
            destination: dropoffCoordinates,
            photoURL:photourl
          }
        )
      })

      setConfirmation(false)
      setResult(true)
      


      

      
    }
    catch(err){
      console.log("error",err)
    }

    
  }

  const handleBack=()=>{
    setConfirmation(false)
    setFinding(true)
  }
  return (
    <div className='flex justify-center sm:mt-4'>
        <div className='w-[85%]'>
    
        <div className='sm:my-4 my-1 text-center text-xl sm:text-2xl'>Confirm Journey</div>
        <div className='text-blue-500'>Meeting point</div>
        <div className='text-black shadow-xl border-blue-500 border-2 text-center  bg-white px-2 py-1 sm:my-2 my-2 rounded-md w-[100%]'>{pickupLocation}</div>

        <div className='mt-4 text-blue-500'>Destination</div>
        <div className='text-black shadow-xl border-blue-500 border-2 text-center  bg-white px-2 py-1 sm:my-2 my-2 rounded-md w-[100%]'>{dropoffLocation}</div>
        <div className='bg-blue-500  text-white p-2 rounded-lg  text-center sm:my-4 mt-2 cursor-pointer' onClick={handleClick}>Find travel partner</div>
        <div className='bg-blue-500  text-white p-2 rounded-lg  text-center sm:my-4 mt-2 cursor-pointer' onClick={handleBack}>Back</div>
        
        

        
      
        </div>
    </div>
  )
}

export default Confirmation