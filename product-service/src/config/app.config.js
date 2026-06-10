import 'dotenv/config';

const appConfig= {
    appName: process.env.APPLICATION_NAME || "PRODUCT-SERVICE",
    nodeEnv: process.env.NODE_ENV || "dev",
    port: process.env.PORT || 3000,
}

export default appConfig;