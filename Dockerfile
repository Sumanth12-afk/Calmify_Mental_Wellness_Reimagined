# Use small, secure image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy only what's needed first
COPY package*.json ./

# Install dependencies cleanly
RUN npm ci --no-audit --no-fund || (sleep 5 && npm ci --no-audit --no-fund)

# Debug: Check the version of cross-spawn
RUN npm list cross-spawn || echo "cross-spawn not found"

# Copy app code
COPY . .

# Build Next.js app
RUN npm run build

# Expose Next.js default port
EXPOSE 3000

# Start server
CMD ["npm", "start"]
