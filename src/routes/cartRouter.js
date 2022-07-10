import { Router } from "express";
import { TokenValidationMiddleware } from "../middlewares/TokenValidationMiddleware.js";
import { ValidateCart } from "../middlewares/productSchemaValidationMiddleware.js";
import {
  AddProductCart,
  DeleteProductCart,
  ListCart,
  DeleteProductsCart,
} from "../controllers/cartControllers.js";

const router = Router();

router.post("/cart", TokenValidationMiddleware, ValidateCart, AddProductCart);
router.delete("/cart/:id", TokenValidationMiddleware, DeleteProductCart);
router.delete("/cart", TokenValidationMiddleware, DeleteProductsCart);
router.get("/cart", TokenValidationMiddleware, ListCart);

export default router;
