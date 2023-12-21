FROM node:21-alpine3.18

WORKDIR /learnDocker/app

COPY package.json .
COPY src ./src

RUN npm install -g ts-node

RUN npm install
