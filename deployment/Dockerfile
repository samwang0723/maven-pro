# Step 1: Base Image
FROM node:21-alpine AS build-stage

# Step 2: Set Working Directory
WORKDIR /app

# Step 3: Copy Package Files
COPY package*.json ./

# Step 4: Install Dependencies
RUN npm install

# Step 5: Copy Project Files
COPY . .

# Step 6: Build the Application
RUN npm run build

# Step 7: Serve the Application
# Use serve to serve the static files
FROM node:21-alpine
WORKDIR /app
COPY --from=build-stage /app/build .
RUN npm install -g serve

EXPOSE 3004

CMD ["serve", "-s", ".", "-l", "tcp://0.0.0.0:3004"]
