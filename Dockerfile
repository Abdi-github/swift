### Multi-Stage Dockerfile for React App ###
# This Dockerfile supports both development and production environments.

# ---- Base Stage ----
# Define the base image for both development and production
FROM node:20-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker caching
COPY package*.json ./

# Install dependencies in a separate step for better caching
RUN npm install

# Copy the entire project into the container
COPY . .

# ---- Development Stage ----
FROM base AS development

# Install development dependencies (optional but useful for tools like ESLint, Jest, etc.)
RUN npm install --only=dev

# Set environment variable to development
ENV NODE_ENV=development

# Expose the development port
EXPOSE 5173

# Start the React development server
CMD ["npm", "run", "dev"]

# ---- Production Stage ----
# This stage is optimized for a lightweight production build
FROM base AS build

# Set environment variable to production
ENV NODE_ENV=production

# Build the React app
RUN npm run build

# ---- Final Production Stage ----
# Use an optimized Nginx image to serve the built React files
FROM nginx:alpine AS production

# Set working directory to Nginx default root
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy built files from the build stage
COPY --from=build /app/dist .

# Copy custom Nginx configuration for serving React
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for serving the React app
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]