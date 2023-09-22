import React,{ useState,useEffect } from 'react'
import Navbar from './navbar'
import Finding from './finding'
import Confirmation from './confirmation'
import Result from './result'
import Map from './map'

const Dashboard = () => {

  const [finding,setFinding]=useState(true)
  const [confirmation,setConfirmation]=useState(false)
  const [result,setResult]=useState(false)

  return (
    <div className='flex justify-center'>
      <div className='sm:w-[80%] w-[100%] h-screen sm:flex flex-wrap'>
        
        <div className='sm:w-[70%] h-[40%] sm:h-[75%] bg-green-400 sm:order-last mt-2'>
          <Map />

        </div>
        <div className='sm:w-[30%] sm:px-2'>
          {finding && <Finding setFinding={setFinding} setConfirmation={setConfirmation} />}
          {confirmation && <Confirmation setConfirmation={setConfirmation} setResult={setResult} />}
          {result && <Result setResult={setResult} />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard