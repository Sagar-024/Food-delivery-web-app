import { Router } from "express";
import { getAllRestaurants, getRestaurantById } from "../controllers/restaurantController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/', protect, getAllRestaurants); 
router.get('/:id', protect, getRestaurantById); 

export default router;
