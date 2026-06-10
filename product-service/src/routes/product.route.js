import express from 'express'
import getAllProducts from '../controllers/product.controller.js';

const productRoute = express.Router();

productRoute.get('/products', getAllProducts);

export default productRoute;