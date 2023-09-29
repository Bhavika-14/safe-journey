"use client"
import React,{ useState,useEffect } from 'react'
import Messages from "@/components/messages"
import Input from "@/components/input"
import { getDoc,setDoc,doc } from 'firebase/firestore'
import { db } from '@/app/firebase'

const Chat = ({chatID,senderID,receiverID}) => {

  
  useEffect(()=>{

    const getChat=async()=>{
      try{
        
        
        const res=await getDoc(doc(db,"chats",chatID))
        console.log(res)

        if(!res.exists()){

          await setDoc(doc(db,"chats",chatID),{messages:[]})
          console.log("completed")

        }
      }
      catch(err){
        console.log("error",err)
      }

    }

    return async()=>{
      await getChat()
    }

  }
     

  ,[chatID])
  
  return (
    <div className='flex bg-white justify-center my-2'>
      <div className='flex flex-col sm:w-[85%] w-[95%] py-4 sm:px-6 h-fit'>
        <Messages chatID={chatID} senderID={senderID} />
        <Input chatID={chatID} senderID={senderID} />
      </div>
    </div>
  )
}

export default Chat