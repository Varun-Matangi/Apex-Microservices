import express from 'express'
import indexRoute from './routes/index.route.js';
import appConfig from './config/app.config.js';

const app = express();

app.use(express.json());
app.use('/api',indexRoute);

app.get('/health-check',(req,res)=>{
    return res.status(200).json({"status":"healthy","Application name":appConfig.appName});
})

export default app;