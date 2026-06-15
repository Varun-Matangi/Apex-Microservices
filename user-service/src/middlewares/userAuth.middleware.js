import jwt from 'jsonwebtoken';
import appConfig from '../config/app.config.js';

const userAuth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: 'Authorization token missing'
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(
            token,
            appConfig.jwtSecret
        );
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token'
        });
    }
};

export default userAuth;