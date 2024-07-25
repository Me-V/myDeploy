import PaymentPage from '@/components/PaymentPage'
import connectDB from '@/db/connectDb'
import React from 'react'
import { notFound } from 'next/navigation'
import User from '@/models/User'

const username = async ({ params }) => {

  const checkUser = async ()=>{
   
    await connectDB()
    let u = await User.findOne({username: params.username})
    if(!u){
      return notFound() 
    }
  }
  
  await checkUser()

  return (
    <>
     <PaymentPage username={params.username}/>
    </>
  )
}

export default username

