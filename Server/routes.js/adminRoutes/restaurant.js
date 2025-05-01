import { Router } from "express";
import { createRestaurant, getAllRestaurants, updateRestaurant, deleteRestaurant } from "../controllers/restaurantController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/', protect, isAdmin, createRestaurant); 
router.get('/', protect, isAdmin, getAllRestaurants);  
router.put('/:id', protect, isAdmin, updateRestaurant);
router.delete('/:id', protect, isAdmin, deleteRestaurant);  

export default router;
