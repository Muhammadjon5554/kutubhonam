import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  cover_img: String,
  pages: Number,
});

export const bookModel = mongoose.model("books", BookSchema);
