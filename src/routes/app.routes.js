import { Router } from "express";
import authRouter from "./app_routes/auth.routes.js";

const router = Router()

router.use("/api/v1", authRouter)

export default router;
