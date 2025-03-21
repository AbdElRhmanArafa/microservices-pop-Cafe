const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection({
  host: config.APP_DB_HOST,
  user: config.APP_DB_USER,
  password: config.APP_DB_PASSWORD,
  database: config.APP_DB_NAME
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;