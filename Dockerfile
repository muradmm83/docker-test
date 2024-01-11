FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .

ENTRYPOINT [ "npm", "start" ]