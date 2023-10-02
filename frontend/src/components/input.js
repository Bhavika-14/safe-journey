"use client"
import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import { doc,updateDoc,Timestamp,arrayUnion } from "firebase/firestore"
import {db} from "@/app/firebase"

const Input = ({chatID,senderID}) => {
  const [message,setMessage]=useState(null)

  async function handleSend(e){
    e.preventDefault()
    console.log(message)

    try{
      await updateDoc(doc(db,"chats",chatID),{
        messages:arrayUnion(
          {
            id:uuid(),
            text:message,
            senderID:senderID,
            date:Timestamp.now()
          }
        )
      })

      setMessage("")
    }
    catch(err){
      console.log("error",err)
    }


}
  return (
    <div className='mt-4 position-absolute'>
        <form className='flex flex-wrap justify-center gap-2' onSubmit={handleSend}>
            <input type='text' className='sm:my-2 mt-2 py-2 px-4 rounded-md sm:w-[75%] w-[100%] border-black border-solid border-2' placeholder='Enter your message here' onChange={(e)=>{setMessage(e.target.value)}} value={message} />
            <button type='submit' className='bg-blue-500 sm:my-2 my-1 p-1 text-center rounded-lg  text-white  py-1 px-4'>Send</button>
        </form>
    </div>
  )
}

export default Input