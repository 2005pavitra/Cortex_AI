import { mongoose,Schema } from "mongoose";

const userSchema  = new mongoose.Schema({
    firebaseUID:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lower:true,
        trim:true
    },
    name:{
        type:String,
        required:true
    },
    avatar:{
        type:String

    }
},{timestamps:true})

const User = mongoose.model("User", userSchema);
export default User;