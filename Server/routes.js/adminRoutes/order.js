import { Router } from "express";
import { getAllOrders, getOrderById, updateOrderStatus, deleteOrder } from "../controllers/orderController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = Router();

router.get('/', protect, isAdmin, getAllOrders); 
router.get('/:id', protect, isAdmin, getOrderById); 
router.put('/:id', protect, isAdmin, updateOrderStatus);
router.delete('/:id', protect, isAdmin, deleteOrder);

export default router;
