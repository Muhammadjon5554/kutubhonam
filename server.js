import app from "./app.js";
import { connectMongoDB } from "./config/mongo.config.js";

const PORT = 8080;

const startServer = async () => {
  await connectMongoDB();
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
};

startServer();
