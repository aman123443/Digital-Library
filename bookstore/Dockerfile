# Use an official, lightweight Java 17 runtime as the base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the compiled .jar file from your project's "target" folder into the container
COPY target/*.jar app.jar

# Tell the container to listen for network connections on port 8080
EXPOSE 8080

# This command runs your Java application and explicitly activates the "prod" profile
ENTRYPOINT ["java","-Dspring.profiles.active=prod","-jar","app.jar"]
