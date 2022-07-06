import express from 'express';
import cors from 'cors';
import productRoute from "./routes/productRoute.js"
import dotenv from "dotenv"

dotenv.config()

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;
server.use(productRoute)


console.log('hello world');
server.listen(PORT);