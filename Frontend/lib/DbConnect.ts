import mongoose from "mongoose";

// MongoDB connection URL
const MONGODB_URL = process.env.MONGODB_URL as string;

if (!MONGODB_URL) {
  throw new Error("Please define the MongoDB connection URL in your environment variables.");
}

// Use `global` caching to prevent multiple connections during hot reloads
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect(): Promise<mongoose.Connection> {
  if (cached.conn) {
    console.log("Using existing MongoDB connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, {})
      .then((mongooseInstance) => mongooseInstance.connection);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB connection established.");
  return cached.conn;
}

export default dbConnect;
