import { Router } from "express";
// import { TokenValidationMiddleware } from "../middlewares/TokenValidationMiddleware.js";
import {
  AddOrderCheckout,
  ListCheckout,
  DeleteCheckout,
} from "../controllers/checkoutControllers.js";

const router = Router();

router.post("/checkout", AddOrderCheckout);
router.get("/checkout", ListCheckout);
router.delete("/checkout", DeleteCheckout);
// router.post("/cart", TokenValidationMiddleware, AddProductCart);
// router.delete("/cart", TokenValidationMiddleware, DeleteProductCart);
// router.get("/cart", TokenValidationMiddleware, ListCart);

export default router;
