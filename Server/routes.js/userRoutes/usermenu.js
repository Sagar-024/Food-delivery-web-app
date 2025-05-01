import { Router } from "express";
import { getRestaurantMenu, getMenuCategory } from "../controllers/menuController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/:restaurantId', protect, getRestaurantMenu);  
router.get('/category/:categoryId', protect, getMenuCategory); 

export default router;
