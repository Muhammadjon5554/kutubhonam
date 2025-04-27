import express from "express";
import OpenAI from "openai";
const app = express();

const client = new OpenAI({
  apiKey:
    "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",
});

async function superAi() {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Kitob schemasi: {title, author,pages}",
  });

  console.log(response);
}
superAi();
export default app;
