import mongoose from 'mongoose';

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);

    if (mongoose.connection.readyState === 1) {
      console.log('Connected to MongoDB');
      connection.isConnected = true;
    }
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw new Error(`Error connecting to database: ${error.message}`);
  }
};
