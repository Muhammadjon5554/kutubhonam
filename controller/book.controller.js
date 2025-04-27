import { bookModel } from "../models/book.model.js";

export const getbook = async (req, res) => {
  const books = await bookModel.find();
  res.send({
    books: books,
  });
};

export const getbookid = async (req, res) => {
  const id = req.params.id;

  const book = await bookModel.findById(id);
  res.send(book);
};

export const postbook = async (req, res) => {
  const book = await bookModel.insertOne(req.body);
  res.send(book);
};

export const putbook = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const result = await bookModel.findByIdAndUpdate(id, body);

  res.send({ msg: "Update successfully!" });
};

export const deletebook = async (req, res) => {
  const id = req.params.id;
  await bookModel.findByIdAndDelete(id);
  res.send({ msg: "Deleted successfully" });
};
