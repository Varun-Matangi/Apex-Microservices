import express from 'express'
import { createProduct, getAllProducts } from '../controllers/product.controller.js';

const productRoute = express.Router();

productRoute.get('/', getAllProducts);
productRoute.post('/',createProduct);

export default productRoute;