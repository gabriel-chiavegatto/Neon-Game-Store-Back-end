import express, { json } from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(cors());
server.use(json());

server.use(productRoute);
console.log("hello world");

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("Server On!"));


