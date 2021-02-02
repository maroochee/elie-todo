# Base docker image to create my app
FROM node:10.15.0

# A directory within the Docker environment
WORKDIR /usr/src/app

# Copies packages*.json files to Docker environment
COPY package*.json ./

# Install all node packages
RUN npm install

# Copies everything over to Docker environment, 
# except files specified in .dockerignore file
COPY . .

# This app will use port 3000 in Docker environment
EXPOSE 3000

# Run this app
CMD [ "npm", "start" ]
