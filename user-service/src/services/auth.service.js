import jwt from 'jsonwebtoken';
import { findUserByEmail } from "./user.service.js";
import appConfig from "../config/app.config.js";
import { comparePassword } from "../utils/bcrypt.util.js";

export async function authLogin(req,res) {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);
    if (user!== null) {
        const isPasswordMatched = await comparePassword(password, user.password);
        if(!isPasswordMatched){
            return res.status(401).json({ success: false, message:   'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id },appConfig.jwtSecret,{ expiresIn: '1h' });
        return res.json({ success: true, token });
        
    } else {
        return res.status(401).json({ success: false, message:   'Invalid credentials' });
    }
}