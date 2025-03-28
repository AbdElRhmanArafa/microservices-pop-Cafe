-- Create the COFFEE database
CREATE DATABASE IF NOT EXISTS COFFEE;

-- Use the COFFEE database
USE COFFEE;

-- Create the coffee user
CREATE USER IF NOT EXISTS 'coffee'@'%' IDENTIFIED BY 'password';

-- Grant all privileges on the COFFEE database to the coffee user
GRANT ALL PRIVILEGES ON COFFEE.* TO 'coffee'@'%';

-- Flush privileges to apply changes
FLUSH PRIVILEGES;

-- Example: Create a sample table (replace with actual table definitions)
CREATE TABLE IF NOT EXISTS suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Add more table creation commands here as needed