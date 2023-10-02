"use client"
import React,{ useState,useEffect } from 'react'
import { doc, setDoc,updateDoc,onSnapshot,arrayUnion } from "firebase/firestore";
import { db } from '@/app/firebase'


const Result = ({setResult,setChatID,setReceiverID,setShowChat,senderID,receiverID,user,pickupCoordinates,dropoffCoordinates,requestID,pickupLocation}) => {
  const [loading,setLoading]=useState(true)
  const [element,setElement]=useState(null)
  let route
  useEffect(()=>{
    
    const unsub=onSnapshot(doc(db,"requests",requestID),(doc)=>{
      if(doc.exists()){

        route=doc.data().routes
        {route.length>1 && route.map((ele,key)=>{
          if(ele.a_id!=user.id){
            
            
            if(user.id>ele.a_id){
              setChatID(user.id+ele.a_id)
            }
            else{
              setChatID(ele.a_id+user.id)
            }
            console.log(ele)
            setElement(ele)
            setLoading(false)
          }
        })}
        console.log(route)
      }
    })
    return ()=>{unsub()}
  
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleChat=()=>{
    setResult(false)
    setShowChat(true)
  }

  

  

  return (
    <div className='flex justify-center'>
        <div className='w-[85%]'>
          {!loading && <div>
            <div className='mt-4'>Meet {element.a_firstname+" "+element.a_lastname} at {pickupLocation}</div>
            <div className='justify-center flex'><img alt='profile picture' width={500} height={500} src={element.photoURL} className='rounded-full sm:my-2 h-36 w-36 object-cover border-solid border-black border-2' /></div>
            <div className='mt-2 p-2 text-white text-center bg-blue-500 rounded-md cursor-pointer' onClick={handleChat}>Message</div>
            <div className='mt-2 p-2 text-white text-center bg-blue-500 rounded-md cursor-pointer'>Cancel Journey</div>
        </div>}
        </div>
          
        {loading && <div className='sm:text-2xl sm:mt-16 mt-16 text-center'>
          Finding Travel Partner...

          



        </div>
          }
    </div>
  )
}

export default Result