import express from 'express';
import { deleteProduct, getProducts, postProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", postProducts);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);


export default router;