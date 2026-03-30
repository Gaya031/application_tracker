import { Router } from "express";
import { loginController, registerController } from "../../controllers/auth.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
const authRouter = Router();

const prefix = "/auth";
authRouter.post(prefix + "/register", registerController);
authRouter.post(prefix + "/login" , loginController);

export default authRouter;