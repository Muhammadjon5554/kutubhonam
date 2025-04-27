import express from "express";
import { bookModel } from "./models/book.model.js";
import {
  deletebook,
  getbook,
  getbookid,
  postbook,
  putbook,
} from "./controller/book.controller.js";
import upload from "./fileupload/file.upload.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Books
app.get("/books", getbook);
app.get("/books/:id", getbookid);
app.post("/books", upload.single("cover_img"), postbook);
app.put("/books/:id", upload.single("cover_img"), putbook);
app.delete("/books/:id", deletebook);

export default app;
