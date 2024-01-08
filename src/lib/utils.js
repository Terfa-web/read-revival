import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    await mongoose.connect(process.env.MONGO);

    if (mongoose.connection.readyState === 1) {
      console.log('Connected to MongoDB');
      connection.isConnected = true;
    }
   
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};




