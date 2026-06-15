import express from 'express'
import  { createUser } from '../controllers/user.controller.js';
import { authLogin } from '../services/auth.service.js';

const authRouter = express.Router();

authRouter.post('/register',createUser);
authRouter.post('/login',authLogin);

export default authRouter;