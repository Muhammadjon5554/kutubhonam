import express from "express";
import OpenAI from "openai";
const app = express();

import client from "client";

async function superAi() {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Kitob schemasi: {title, author,pages}",
  });

  console.log(response);
}
superAi();
export default app;
