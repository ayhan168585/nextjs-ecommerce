import mongoose  from "mongoose"


const connectDB=()=>{

    if(mongoose.connections[0].readyState){
        console.log("Already connected")
        return
    }

    mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("DB Connection is Successfull!");
}).catch((err)=>{
    console.log(err);
});
    // mongoose.connect(process.env.MONGODB_URL,{
    //     useCreateIndex:true,
    //     useFindAndModify:false,
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // },err=>{
    //     if(err) throw err
    //     console.log("Connected MongoDB")
    // })

}

export default connectDB