import { Router } from "express";
import { TokenValidationMiddleware } from "../middlewares/TokenValidationMiddleware.js";
import { ValidateCheckout } from "../middlewares/productSchemaValidationMiddleware.js";
import {
  AddOrderCheckout,
  ListCheckout,
  DeleteCheckout,
} from "../controllers/checkoutControllers.js";

const router = Router();

router.post(
  "/checkout",
  TokenValidationMiddleware,
  ValidateCheckout,
  AddOrderCheckout
);
router.get("/checkout", TokenValidationMiddleware, ListCheckout);
router.delete("/checkout", TokenValidationMiddleware, DeleteCheckout);

export default router;
