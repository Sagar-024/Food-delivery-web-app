import { Router } from "express";
import { createMenuItem, getAllMenuItems, updateMenuItem, deleteMenuItem } from "../controllers/menuController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/', protect, isAdmin, createMenuItem);  
router.get('/', protect, isAdmin, getAllMenuItems); 
router.put('/:id', protect, isAdmin, updateMenuItem);  
router.delete('/:id', protect, isAdmin, deleteMenuItem);  

export default router;
