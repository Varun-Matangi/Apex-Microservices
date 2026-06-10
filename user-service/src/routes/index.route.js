import express from 'express';
import userRoute from './user.route.js';

const indexRoute = express.Router();

indexRoute.use('/v1',userRoute);

export default indexRoute;