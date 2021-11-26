
import connectDB from "../../../utils/connectDB";
import Orders from "../../../models/orderModel"
import auth from "../../../middleware/auth"
import Products from "../../../models/productModel"


connectDB()

export default async (req,res)=>{
    switch(req.method){
        case 'PATCH':
            await paymentOrder(req,res)
            break;
      
    }
}

const paymentOrder=async (req,res)=>{
try {
    const result=await auth(req,res)
    const {id}=req.query
    
} catch (err) {
    return res.status(500).json({err:err.message})
}
}