# Stage 1: Build the application with Maven
FROM maven:3.8-openjdk-17 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Create the final, lightweight production image
# Using a more specific and stable tag to improve reliability
FROM eclipse-temurin:17-jre-slim-jammy

WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]