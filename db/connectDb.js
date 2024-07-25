import mongoose from "mongoose";

const connectDB = async () => {
  
    const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {

      serverSelectionTimeoutMS: 30000,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
   
}

export default connectDB; 