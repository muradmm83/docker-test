FROM node

WORKDIR /app

COPY ./src/package.json .

RUN npm install

COPY ./dist/* .

ENTRYPOINT [ "npm", "start" ]