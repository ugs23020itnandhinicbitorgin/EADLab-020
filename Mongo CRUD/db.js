import mongoose from 'mongoose';

export async function connectDB(uri) {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, { dbName: "studentdb" });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log("❌ Error connecting to database:", error);
  }
}
