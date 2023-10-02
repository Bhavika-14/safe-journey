"use client"
import React,{ useState } from 'react'
import { db, storage } from "@/app/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import Image from 'next/image';

const CompleteSignup = ({setShowCompleteSignup,image,user,setDashboard,firstName,lastName,dob,email,password,setUser}) => {
  const [loading,setLoading]=useState(false)

  const handleClick=async(e)=>{
    setLoading(true)

    var data={
      firstname:firstName,lastname:lastName,dob:dob,email:email,password:password
    }
    try{
      const response=await fetch("/api/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data) 
      })

      
      
      

      if(response.status===201){
        
        const res=await response.json()
        console.log("res",res)
        console.log("id",res.id)
        setUser(
          {
            firstname:res.firstname,
            lastname:res.lastname,
            email:res.email,
            id:res.id
          }
        )

        console.log(user)

      
          const date = new Date().getTime();
          const storageRef = ref(storage, `${firstName + date}`);
    
          await uploadBytesResumable(storageRef, image).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
      
               
                //create user on firestore
                await setDoc(doc(db, "users", res.id), {
                  uid: res.id,
            
                  email,
                  photoURL: downloadURL,
                });

                console.log("completed")
        })})
        
        /*
        try{
        
        await setDoc(doc(db,"users",res.id), {
          name: res.name,
          email: res.email,
          id: res.id
          
        });
        console.log("completed")}
        catch(err){
          console.log(err)
        }

        router.push("/login")
        

        setShowCompleteSignup(false)
    setLoading(false)
    setDashboard(true)
      }
      */
      setShowCompleteSignup(false)
      setLoading(false)
      setDashboard(true)

    }
  }
    catch(err){
    
      console.log(err)
    }






  
    setLoading(false)

    
  }


  return (
    <div className='flex justify-center'>
    <div className='sm:w-[30%] w-[85%]'>
    {loading && <div className='w-[100%] justify-center px-1 py-2 text-blue-500 rounded-lg bg-blue-200 border-blue-500 border-2 text-center'>
          Loading...
        </div>}
        <div className='text-center my-4 sm:text-3xl text-lg'>
            Thanks for adding your photo!

        </div>

        <div className='flex justify-center my-8'>
            {image && <Image alt='profile picture' width={500} height={500} src={URL.createObjectURL(image)} className='rounded-full h-36 w-36 object-cover border-solid border-black border-2' />}
            {!image && <div className='rounded-full h-36 w-36 bg-gray-300' />}
        </div>

        

        <div className='my-4'>
            You&apos;re now ready to find a travel partner.
        </div>

        <div className='text-center bg-blue-500 text-white py-2 px-2 rounded-md my-4 cursor-pointer' onClick={handleClick}>Continue</div>

    </div>

</div>
  )
}

export default CompleteSignup