import express from 'express'
import cors from 'cors'
import indexRoute from './routes/index.route.js';
import appConfig from '../../user-service/src/config/app.config.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',indexRoute);


app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString()
    });
});

app.get('/info', (req, res) => {
    res.json({
        application: appConfig.appName,
        version: appConfig.appVersion,
        environment: appConfig.nodeEnv
    });
});

export default app;