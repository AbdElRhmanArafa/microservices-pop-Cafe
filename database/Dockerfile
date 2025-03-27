# Use the official MySQL image as the base image
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=COFFEE
ENV MYSQL_USER=coffee
ENV MYSQL_PASSWORD=password

# Copy the initialization SQL script to the Docker image
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default MySQL port
EXPOSE 3306