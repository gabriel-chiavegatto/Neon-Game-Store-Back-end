import { Router } from "express";
import { TokenValidationMiddleware } from "../middlewares/TokenValidationMiddleware.js";
import { ValidateOrder } from "../middlewares/productSchemaValidationMiddleware.js";
import {
  AddOrderHistory,
  ListOrdersHistory,
} from "../controllers/orderHistoryControllers.js";

const router = Router();

router.post(
  "/orders",
  TokenValidationMiddleware,
  ValidateOrder,
  AddOrderHistory
);
router.get("/orders", TokenValidationMiddleware, ListOrdersHistory);

export default router;
