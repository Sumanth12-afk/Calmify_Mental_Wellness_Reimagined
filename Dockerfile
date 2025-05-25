# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Switch to root user to install global packages
USER root

# Install a specific, compatible version of npm
RUN npm install -g npm@9

# Switch back to node user for security
USER node

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the default Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
