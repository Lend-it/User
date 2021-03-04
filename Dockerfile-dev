FROM node:14.16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./app

CMD [ "/bin/sh", "-c" ,"npm install && npm run-script build && npm start"]
