import express from 'express';
import userRoute from './user.route.js';
import authRouter from './auth.route.js';
import userAuth from '../middlewares/userAuth.middleware.js';

const indexRoute = express.Router();

indexRoute.use('/v1/auth',authRouter);
indexRoute.use('/v1/users',userAuth,userRoute);


export default indexRoute;