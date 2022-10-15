FROM node:alpine

RUN mkdir /app

WORKDIR /app

EXPOSE 3000

COPY ./simple_webapp /app

RUN npm install

CMD ["npm", "start"]



