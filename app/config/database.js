import mongoose from 'mongoose'

import cfg from './config.js'
const MONGO_URI = cfg.development.db.url

const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new error('MONGODB_URI is missing!')
    }
    const connect = await mongoose.connect(MONGO_URI, {
      dbName: 'invoicely_app_db',
      bufferCommands: false,
    })
    console.log(
      `       MongoDB Connected: ${connect.connection.host}` +
        '\n\\*/---------------_*oOo*_---------------\\*/',
    )
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

export default connectDB
