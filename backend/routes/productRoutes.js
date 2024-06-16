import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';
import { getProducts, getProductById } from '../controller/productContoller.js';

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;