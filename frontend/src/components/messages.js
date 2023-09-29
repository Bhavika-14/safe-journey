"use client"
import React,{ useState,useEffect } from 'react'
import { doc,onSnapshot } from "firebase/firestore"
import { db } from '@/app/firebase'
import { Message } from './message'

const Messages = ({chatID,senderID}) => {

  const [messages,setMessages]=useState([])

  useEffect(()=>{
  
    const unsub=onSnapshot(doc(db,"chats",chatID),(doc)=>{
        doc.exists() && setMessages(doc.data().messages)

    })

    return ()=>{
        unsub()
    }
  },[chatID])

 return(
    <div className='flex flex-col h-[75%]'>
        {messages.map((message)=>{
          const date=new Date(message.date*1000)
          const hours=("0"+date.getHours()).slice(-2)
          const minutes=("0"+date.getMinutes()).slice(-2)
          const time=hours+":"+minutes
          console.log(time)
          
          return (
                 <div className='' key={message.id}><Message message={message.text} senderID={senderID} sender={message.senderID} time={time} /></div>
          )}
        )}
   </div>
 )

  
}

export default Messages