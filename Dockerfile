FROM node:11.3.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . ./
