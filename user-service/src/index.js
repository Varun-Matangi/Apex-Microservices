import appConfig from "./config/app.config.js";
import { connectToDb } from "./config/db.config.js";
import app from "./server.js";

connectToDb();

app.listen(appConfig.port,()=>{
    console.log(`[${new Date().toISOString()}] INFO  ${appConfig.appName} - Application started successfully | Environment=${appConfig.nodeEnv} | Port=${appConfig.port}`)
})