import appConfig from "./config/app.config.js";
import app from "./server.js";

app.listen(appConfig.port,()=>{
    console.log(`[${new Date().toISOString()}] INFO  ${appConfig.appName} - Application started successfully | Environment=${appConfig.nodeEnv} | Port=${appConfig.port}`)
})