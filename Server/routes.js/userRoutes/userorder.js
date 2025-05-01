import { Router } from "express";
import { getAllUserOrders, placeUserOrder, getUserOrderById, updateUserOrderStatus, deleteUserOrder } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/', protect, getAllUserOrders); 
router.get('/:id', protect, getUserOrderById); 
router.post('/', protect, placeUserOrder);  
router.put('/:id', protect, updateUserOrderStatus); 
router.delete('/:id', protect, deleteUserOrder); 

export default router;
