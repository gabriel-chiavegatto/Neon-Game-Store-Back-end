import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;



console.log('hello world');
server.listen(PORT);