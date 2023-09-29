import React,{ useRef,useState } from 'react'

const Profile = ({setShowProfile,setShowCompleteSignup,image,setImage}) => {

  const inputRef=useRef(null)

  const handleImageClick=()=>{
    inputRef.current.click()
  }
  const handleImageChange=(e)=>{
    const file=e.target.files[0]
    setImage(file)
  }

  const handleClick=()=>{
    if(!image){
      return
    }
    setShowProfile(false)
    setShowCompleteSignup(true)
  }
  return (
    <div className='flex justify-center'>
        <div className='sm:w-[30%] w-[85%]'>
            <div className='text-center my-4 sm:text-3xl text-xl'>
                Add a photo of yourself

            </div>

            <div className='my-4 sm:text-lg text-sm text-center'>
                Your safety is our greatest priority. Adding a photo will help your travel partner identify you when you meet up.
            </div>

            <div className='flex justify-center my-8'>
                {image && <img src={URL.createObjectURL(image)} className='rounded-full h-36 w-36 object-cover border-solid border-black border-2' />}
                {!image && <div className='rounded-full h-36 w-36 bg-blue-200' />}
            </div>

            <div>
                <input type='file' required ref={inputRef} onChange={handleImageChange} style={{display:"none"}} />

            </div>

            

            <div className='text-center bg-blue-500 text-white py-2 px-2 rounded-md my-4 cursor-pointer' onClick={handleImageClick}>Upload from library</div>
            <div className='text-center bg-blue-500 text-white py-2 px-2 rounded-md my-4 cursor-pointer' onClick={handleClick}>Continue</div>

        </div>

    </div>
  )
}

export default Profile