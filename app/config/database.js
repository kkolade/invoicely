import mongoose from 'mongoose';

import cfg from './config.js';
let MONGO_URI = cfg.development.db.url;

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new error('MONGODB_URI is missing!');
    }
    const connect = await mongoose.connect(MONGO_URI, {
      // dbName: 'finly_app',
      // bufferCommands: false,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
