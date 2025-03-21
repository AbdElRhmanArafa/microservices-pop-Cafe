# Project Setup

## Install MySQL

To install MySQL on a Linux machine, use the following commands:

1. Update your package index:

    ```sh
    sudo apt update
    ```

2. Install MySQL server:

    ```sh
    sudo apt install mysql-server
    ```

3. Secure the MySQL installation:

    ```sh
    sudo mysql_secure_installation
    ```

4. Start the MySQL service:

    ```sh
    sudo systemctl start mysql
    ```

5. Enable MySQL to start on boot:

    ```sh
    sudo systemctl enable mysql
    ```

## Create Database and User

1. Open a terminal and log in to the MySQL server as the root user:

    ```sh
    sudo mysql -u root -p
    ```

2. Create the `COFFEE` database:

    ```sql
    CREATE DATABASE COFFEE;
    ```

3. Create a new user (replace `username` and `password` with your desired username and password):

    ```sql
    CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
    ```

4. Grant all permissions on the `COFFEE` database to the new user:

    ```sql
    GRANT ALL PRIVILEGES ON COFFEE.* TO 'username'@'localhost';
    ```

5. Flush the privileges to ensure that they are saved and available:

    ```sql
    FLUSH PRIVILEGES;
    ```

6. Exit the MySQL prompt:

    ```sql
    EXIT;
    ```

## Create Tables

1. Open a terminal and log in to the MySQL server as the root user:

    ```sh
    sudo mysql -u root -p
    ```

2. Switch to the `COFFEE` database:

    ```sql
    USE COFFEE;
    ```

3. Create the `suppliers` table:

    ```sql
    CREATE TABLE suppliers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    ```

4. Exit the MySQL prompt:

    ```sql
    EXIT;
    ```

## Update Configuration

Update your `config.js` file with the new user's credentials:

```javascript
// filepath: [config.js](http://_vscodecontentref_/0)
// define default config, but allow overrides from ENV vars
let config = {
  APP_DB_HOST: "localhost", // Change to localhost for local MySQL
  APP_DB_USER: "username", // Update with your local MySQL username
  APP_DB_PASSWORD: "password", // Update with your local MySQL password
  APP_DB_NAME: "COFFEE" // Ensure this database exists locally
}

Object.keys(config).forEach(key => {
  if(process.env[key] === undefined){
    console.log(`[NOTICE] Value for key '${key}' not found in ENV, using default value.  See app/config/config.js`)
  } else {
    config[key] = process.env[key]
  }
});

module.exports = config;