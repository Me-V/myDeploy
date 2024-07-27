import mongoose from "mongoose";

const connectDB = async () => {
  
    const conn = await mongoose.connect(process.env.MONGODB_URI, {

      serverSelectionTimeoutMS: 30000,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
   
}

export default connectDB; 
