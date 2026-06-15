
import { connect } from 'mongoose';
import appConfig from './app.config.js';


export async function connectToDb() {
  await connect(appConfig.dbUrl).then(()=>{
    console.log(`[${new Date().toISOString()}] INFO  ${appConfig.appName} - Connected to mongo database | Environment=${appConfig.nodeEnv} `);
  }).catch((err)=>{
    console.log(`[${new Date().toISOString()}] INFO  ${appConfig.appName} - Unable to connect to mongo database | Environment=${appConfig.nodeEnv} | ${err} `);
  });

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}