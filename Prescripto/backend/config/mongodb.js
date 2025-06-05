import mongoose from "mongoose";
const MONGODB_URL = 'mongodb+srv://vasuakbari10:1055@nodejs.1yrwtfp.mongodb.net';

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  })
  
  await mongoose.connect(`${MONGODB_URL}/prescripto`)
}

export default connectDB;