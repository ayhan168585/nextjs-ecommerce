import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    root:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String,
        default:"https://res.cloudinary.com/dh70tt9xs/image/upload/v1636027291/test/user-member-avatar-face-profile-icon-vector-22965342-300x300_rgyciv.jpg"
    },

},{
    timestamps:true
})

let Dataset=mongoose.models.user || mongoose.model("user",userSchema)

export default Dataset