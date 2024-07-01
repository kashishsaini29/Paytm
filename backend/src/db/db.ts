import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const MONGODB_URI: string | undefined = process.env["MONGODB_URI"];

const connectToDatabase = async () => {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Exit the process with failure
  }
};

connectToDatabase();

export default mongoose.connection;
