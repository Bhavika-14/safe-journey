import User from "@/models/user"
import connect from "@/utils/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST=async(request)=>{
    console.log(request)
    const req=await request.json()
    const email=req.email
    const password=req.password

    await connect()
   // const hashedPassword=await bcrypt.hash(password,10)
    


    try{
        const user=await User.findOne({email:email}).exec()
        console.log(user)
        if(!user){
            console.log("401")
            return new NextResponse({message:"User does not exist"},{ status:202 })
        }

        if(user.password!=password){
            console.log("403")
        
            return new NextResponse({message:"Incorrect Password"},{ status:203 })
        }


        const new_user={firstname:user.firstname,lastname:user.lastname,email:user.email,id:user._id}
        console.log("new user",new_user)
        return new NextResponse(JSON.stringify(new_user),{ status:201 })


    }
    catch(err){
        console.log(err)
        return new NextResponse(err.message,{status:500})
    }
}

export const GET=()=>{
    return new NextResponse({message:"HELLO"})
}