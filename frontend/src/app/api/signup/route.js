import User from "@/models/user"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST=async(request)=>{
    
    const req=await request.json()
    const firstname=req.firstname
    const lastname=req.lastname
    const dob=req.dob
    const email=req.email
    const password=req.password

    await connect()
    //const hashedPassword=await bcrypt.hash(password,10)
    

    const newUser= new User({
        firstname:firstname ,lastname:lastname,dob:dob,email:email ,password:password
    })
    console.log(firstname,lastname,dob,email,password,newUser)

    try{
        await newUser.save()
        const new_user={firstname:newUser.firstname,lastname:newUser.lastname,email:newUser.email,id:newUser._id}
        console.log("new user",newUser)
        return new NextResponse(JSON.stringify(new_user),{ status:201 })


    }
    catch(err){
        return new NextResponse(err.message,{status:500})
    }
}