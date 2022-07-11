import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";


const router = Router();

router.post("/login", signIn);
router.post("/sign-up", signUp);

export default router;
