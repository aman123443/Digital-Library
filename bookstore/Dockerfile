# Stage 1: Build the application with Maven
# This stage uses a base image that includes Maven and the JDK
FROM maven:3.8-openjdk-17 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml file first to leverage Docker's layer caching
COPY pom.xml .

# Copy the rest of the source code
COPY src ./src

# Run the Maven command to build the project and create the JAR file.
# We skip tests to make the build faster.
RUN mvn clean package -DskipTests


# Stage 2: Create the final, lightweight production image
# This stage uses a smaller JRE-only image because we don't need the JDK or Maven to just run the app
FROM openjdk:17-jre-slim

# Set the working directory
WORKDIR /app

# Copy ONLY the built .jar file from the 'builder' stage into this final image
COPY --from=builder /app/target/*.jar app.jar

# Expose the port the application runs on
EXPOSE 8080

# The command to run the application when the container starts
ENTRYPOINT ["java", "-jar", "app.jar"]