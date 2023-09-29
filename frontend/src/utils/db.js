require("dotenv")
import mongoose from "mongoose"
const connect=async()=>{
   try{
      await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL)
   }
   catch(error){
       console.log(error)
       throw new Error("Connection Failed")
   }
}

 export default connect;