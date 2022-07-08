import { Router } from "express";
// import { TokenValidationMiddleware } from "../middlewares/TokenValidationMiddleware.js";
import {
  AddProductCart,
  DeleteProductCart,
  ListCart,
  DeleteProductsCart,
} from "../controllers/cartControllers.js";

const router = Router();

router.post("/cart", AddProductCart);
router.delete("/cart/:id", DeleteProductCart);
router.delete("/cart", DeleteProductsCart);
router.get("/cart", ListCart);

// router.post("/cart", TokenValidationMiddleware, AddProductCart);
// router.delete("/cart", TokenValidationMiddleware, DeleteProductCart);
// router.get("/cart", TokenValidationMiddleware, ListCart);

export default router;
