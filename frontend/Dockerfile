FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY . .
RUN npm install

# Build the app
RUN npm run build

# Serve the app with a lightweight static server
RUN npm install -g serve
EXPOSE 5173

CMD ["serve", "-s", "dist"]
