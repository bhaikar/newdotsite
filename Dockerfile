
FROM node:22

#goes to app directory
WORKDIR /app

#copies package.json and package-lock.json to the working directory
COPY package*.json ./
#installs dependencies
RUN npm install

#copies everything to the working directory
COPY . .

# set port environment variable
ENV PORT=3000

#exposes port 3000
EXPOSE 3000

#starts the app
CMD ["npm", "run", "dev"]


