import 'dotenv/config';

const appConfig= {
    appName: process.env.APPLICATION_NAME || "PRODUCT-SERVICE",
    appVersion: process.env.APP_VERSION || "1.0.0",
    nodeEnv: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 3000,
    dbUrl:process.env.DB_URL || "mongodb://user:password@127.0.0.1:27017/products"
}

export default appConfig;