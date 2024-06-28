import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://kashish:azT1lJeeW1bwgEXj@cluster0.p29svfl.mongodb.net/Paytm?retryWrites=true&w=majority&appName=Paytm';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1); // Exit the process with failure
  }
};

connectToDatabase();

export default mongoose.connection;
