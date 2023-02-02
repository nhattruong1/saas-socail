FROM node:18-alpine

# Set the working directory in the image
WORKDIR /app

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

# Copy the rest of the application code to the image
COPY . .

# Expose port 3000 to the host system
EXPOSE 3000

# Set the command to run when the container starts
CMD [ "npm", "start" ]
