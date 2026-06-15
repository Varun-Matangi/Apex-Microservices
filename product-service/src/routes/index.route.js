import express from 'express';
import productRoute from './product.route.js';

const indexRoute = express.Router();

indexRoute.use('/v1/products',productRoute);

export default indexRoute;