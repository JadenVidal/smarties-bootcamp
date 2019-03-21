FROM node:8.12.0-alpine as smarties
WORKDIR /home/smarties
COPY ./application ./
# RUN yarn install