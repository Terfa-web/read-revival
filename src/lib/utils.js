import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const uri = process.env.MONGO 
    await mongoose.connect(uri);

    if (mongoose.connection.readyState === 1) {
      console.log('Connected to MongoDB');
      connection.isConnected = true;
    }
   
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};




