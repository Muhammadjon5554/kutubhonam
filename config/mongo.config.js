import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/book-app");
    console.log("MONGO connected!");
  } catch (error) {
    console.error("DB connection error: ", error);
  }
};
