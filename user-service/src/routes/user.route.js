import express from 'express'
import getAllUsers from '../controllers/user.controller.js';

const userRoute = express.Router();

userRoute.get('/users', getAllUsers);

export default userRoute;