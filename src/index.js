import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(cors());
server.use(json());

const PORT = process.env.PORT || 5000;

console.log("hello world");
server.listen(PORT, () => console.log("Server On!"));