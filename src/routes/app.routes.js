import { Router } from "express";
import authRouter from "./app_routes/auth.routes.js";

const router = Router();

const prefix = "/api/v1";

router.use(prefix, authRouter);

export default router;
