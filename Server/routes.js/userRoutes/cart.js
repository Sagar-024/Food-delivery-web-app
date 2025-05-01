import { Router } from "express";
import { getUserCart, addToUserCart, removeFromUserCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/', protect, getUserCart);  
router.post('/', protect, addToUserCart); 
router.delete('/', protect, removeFromUserCart); 

export default router;
