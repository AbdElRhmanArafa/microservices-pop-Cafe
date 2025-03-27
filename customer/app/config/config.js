// Load environment variables from .env file
require('dotenv').config();

// define default config, but allow overrides from ENV vars
let config = {
  APP_DB_HOST: process.env.APP_HOST || "localhost", // Change to localhost for local MySQL
  APP_DB_USER: process.env.APP_DB_USER || "coffee", // Update with your local MySQL username
  APP_DB_PASSWORD: process.env.APP_DB_PASSWORD || "password", // Update with your local MySQL password
  APP_DB_NAME: process.env.APP_DB_NAME || "COFFEE" // Ensure this database exists locally
};

Object.keys(config).forEach(key => {
  if (process.env[key] === undefined) {
    console.log(`[NOTICE] Value for key '${key}' not found in ENV, using default value. See app/config/config.js`);
  }
});

module.exports = config;