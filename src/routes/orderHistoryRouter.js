import { Router } from "express";
// import { TokenValidationMiddleware } from "../middlewares/TokenValidationMiddleware.js";
import { AddOrderHistory, ListOrdersHistory  } from "../controllers/orderHistoryControllers.js";

const router = Router();

router.post("/orders", AddOrderHistory);
router.get("/orders", ListOrdersHistory);

// router.post("/cart", TokenValidationMiddleware, AddProductCart);
// router.delete("/cart", TokenValidationMiddleware, DeleteProductCart);
// router.get("/cart", TokenValidationMiddleware, ListCart);

export default router;
