const mongoose = require("mongoose")

const Schema=mongoose.Schema;
const userSchema=new Schema({
    firstname:{type:String},
    lastname:{type:String},
    dob:{type:String},
    email:{type:String},
    password:{type:String}


}
)
export default mongoose.models.User || mongoose.model("User",userSchema)

