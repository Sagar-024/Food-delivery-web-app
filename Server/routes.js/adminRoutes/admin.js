import { Router } from "express";
import { getAdminDashboard } from "../controllers/adminController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/', protect, isAdmin, getAdminDashboard);  

export default router;
