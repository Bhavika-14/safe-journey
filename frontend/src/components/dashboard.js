"use client"
import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Navbar from './navbar'
import Finding from './finding'
import Confirmation from './confirmation'
import Result from './result'
import Map from './map'
import Chat from './chat'
require('dotenv').config()

const Dashboard = () => {

  const [finding,setFinding]=useState(true)
  const [confirmation,setConfirmation]=useState(false)
  const [result,setResult]=useState(false)
  const [pickupCoordinates,setPickupCoordinates]=useState([139.7525,35.6846])
  const [dropoffCoordinates,setDropoffCoordinates]=useState([139.7525,35.6846])
  const [pickupLocation,setPickupLocation]=useState("")
  const [dropoffLocation,setDropoffLocation]=useState("")
  const [showChat,setShowChat]=useState(false)
  const [chatID,setChatID]=useState("41")
  const [senderID,setSenderID]=useState("1")
  const [receiverID,setReceiverID]=useState(null)
  
  const getPickupCoordinates=async()=>{
    const response =await fetch(`https://api.maptiler.com/geocoding/${pickupLocation}.json?autocomplete=false&fuzzyMatch=true&limit=3&key=${process.env.NEXT_PUBLIC_MAPLIBRE_API_KEY}`)
    const res=await response.json()
    const coordinates=res.features[0].center
    console.log(coordinates)
    setPickupCoordinates(coordinates)


  }

  const getDropoffCoordinates=async()=>{
    const response =await fetch(`https://api.maptiler.com/geocoding/${dropoffLocation}.json?autocomplete=false&fuzzyMatch=true&limit=3&key=${process.env.NEXT_PUBLIC_MAPLIBRE_API_KEY}`)
    const res=await response.json()
    const coordinates=res.features[0].center
    console.log(coordinates)
    setDropoffCoordinates(coordinates)


  }

   

  return (
    <div className='flex justify-center'>
      {!showChat && 
        <div className='sm:w-[80%] w-[100%] h-screen sm:flex flex-wrap'>

        
        
        <div className='sm:w-[70%] h-[55%] sm:h-[75%] sm:order-last mt-2'>
        <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

        </div>
        <div className='sm:w-[30%] sm:px-2'>
          {finding && <Finding setFinding={setFinding} setConfirmation={setConfirmation} setPickupLocation={setPickupLocation} setDropoffLocation={setDropoffLocation} />}
          {confirmation && <Confirmation setConfirmation={setConfirmation} setResult={setResult} setFinding={setFinding} getPickupCoordinates={getPickupCoordinates} getDropoffCoordinates={getDropoffCoordinates} pickupLocation={pickupLocation} dropoffLocation={dropoffLocation} />}
          {result && <Result setResult={setResult} setChatID={setChatID} setReceiverID={setReceiverID} setShowChat={setShowChat} senderID={senderID} receiverID={receiverID} />}
        </div>
      </div>
}

    {showChat && 
    <div className='sm:w-[50%] w-[85%]'>
      <Chat chatID={chatID} senderID={senderID} receiverID={receiverID} />

    </div>
    }
    </div>
  )
}

export default Dashboard