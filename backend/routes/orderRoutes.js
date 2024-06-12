import express from 'express'
const router = express.Router();

import {
    addOrderItems,
    getMyOrders,
    getAllOrders,
    getOrderById,
    updateOrderToDeliverd,
    updateOrderToPaid
} from '../controller/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').post(addOrderItems).get(protect, admin, getAllOrders);
router.get('/mine', protect, getMyOrders)
router.get('/:id', protect, admin, getOrderById)
router.get('/:id/pay', protect, updateOrderToPaid)
router.get('/:id/deliver', protect, admin, updateOrderToDeliverd)


export default router;