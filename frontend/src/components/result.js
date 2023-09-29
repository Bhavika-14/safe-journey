import React from 'react'

const Result = ({setResult,setChatID,setReceiverID,setShowChat,senderID,receiverID}) => {

  const handleChat=()=>{
    setResult(false)
    setShowChat(true)
  }

  setReceiverID("4")

  if(senderID>receiverID){
    setChatID(senderID+receiverID)
  }
  if(senderID<receiverID){
    setChatID(receiverID+senderID)
  }

  return (
    <div className='flex justify-center'>
        <div className='w-[85%]'>
            <div className='mt-4'>Meet Julia at this place</div>
            <div className='justify-center flex'><div className='my-4 h-32 w-32 bg-black rounded-full'></div></div>
            <div className='mt-2 p-2 text-white text-center bg-black rounded-md cursor-pointer' onClick={handleChat}>Message</div>
            <div className='mt-2 p-2 text-white text-center bg-black rounded-md cursor-pointer'>Cancel Journey</div>
        </div>
    </div>
  )
}

export default Result