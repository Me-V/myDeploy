"use server"

import Payment from "@/models/Payment"
import Razorpay from "razorpay"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

//for initiating the orders
export const initiate = async(amount, to_username, paymentform) => {
     
    await connectDB()
    
    let user = await User.findOne({username: to_username})
    const secret = user.razorpaysecret

    var instance = new Razorpay({key_id: user.razorpayid, key_secret:secret})
    

    instance.orders.create({
        
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1",
        notes:{

            key1: "value3",
            key2: "value1"
        }
    })


    let options ={
        amount : Number.parseInt(amount),
        currency:"INR",
    }

    let x = await instance.orders.create(options)

    //creating an object which shows the pending payments 
    await Payment.create({oid: x.id, amount:amount, to_user:to_username, name:paymentform.name, message:paymentform.message})

    return x;
}

export const fetchuser = async (username)=>{

    await connectDB()
    let u = await User.findOne({username :username})
    let user = u.toObject({flattenObjectIds: true})
    return user
}

export const fetchpayments = async (username) =>{

    await connectDB()

    let payments = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(2).lean();
    return payments;
}


export const updateProfile = async (data, oldUsername)=>{
   
    await connectDB()
    let ndata = Object.fromEntries(data)

    if(oldUsername !== ndata.username){

        let u = await User.findOne({username: ndata.username})
        if(u){

            return {error : "User Name Already Exists"}
        }

        await User.updateOne({email:ndata.email}, ndata)
        await Payment.updateMany({to_user: oldUsername}, {to_user: ndata.username})
    }
         
    await User.updateOne({email: ndata.email}, ndata)
}