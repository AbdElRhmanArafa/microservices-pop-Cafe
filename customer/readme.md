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

3. Start the MySQL service:

    ```sh
    sudo systemctl start mysql
    ```

4. Enable MySQL to start on boot:

    ```sh
    sudo systemctl enable mysql
    ```

5. Create the `COFFEE` database:

    ```sql
    CREATE DATABASE COFFEE;
    ```

6. Create a new user:
    ```sql
    CREATE USER 'coffee'@'localhost' IDENTIFIED BY 'password';
    ```

7. Grant all permissions on the `COFFEE` database to the new user:

    ```sql
    GRANT ALL PRIVILEGES ON COFFEE.* TO 'coffee'@'localhost';
    ```

5. Flush the privileges to ensure that they are saved and available:

    ```sql
    FLUSH PRIVILEGES;
    ```

6. Exit the MySQL prompt:

    ```sql
    EXIT;
    ```

    ## to run nodejs server
    ```sh
    sudo docker run --env-file .env -it abdelrahman2arafa/node.js_coffe
    ```

    