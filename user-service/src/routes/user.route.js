import express from 'express'
import  { getAllUsers, getUser } from '../controllers/user.controller.js';

const userRoute = express.Router();

userRoute.get('/', getAllUsers);
userRoute.get('/me',getUser);


export default userRoute;