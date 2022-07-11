import express, { json } from "express";
import cors from "cors";
import productRoute from "./routes/gameRouter.js";
import userRoute from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";
import checkoutRouter from "./routes/checkoutRouter.js";
import orderHistoryRouter from "./routes/orderHistoryRouter.js";
import dotenv from "dotenv";

dotenv.config();

const server = express();
server.use(cors());
server.use(json());

server.use(productRoute);
server.use(userRoute);

console.log("hello world");
server.use(cartRouter);
server.use(checkoutRouter);
server.use(orderHistoryRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server On!"));
