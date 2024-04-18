# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /src

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the React app
EXPOSE 3000

# Start the React app with specified host and port
CMD ["npm", "start", "--host", "0.0.0.0", "--port", "3000"]
