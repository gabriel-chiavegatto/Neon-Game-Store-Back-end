import {Router} from "express";
import { signIn, signUp } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post('/login', signIn);
userRoute.post('/sign-up', signUp);

export default userRoute;