# Use a small, official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Expose port 8000 to the host system
EXPOSE 8000

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the default command to run when the container starts
CMD ["npm", "start"]