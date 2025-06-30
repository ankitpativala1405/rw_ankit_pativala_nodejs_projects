import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const connectionres = await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connection', `MongoDB Host: ${connectionres.connection.host}`);
    } catch (err) { 
        console.error('MongoDB Connection Error:', err);
        process.exit(1);
    }
};

export default connectDB;
