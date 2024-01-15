FROM node:lts-slim as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build-prod

FROM node:lts-slim as deploy

WORKDIR /app

COPY package.json .

RUN npm install

COPY --from=build /app/dist ./dist

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]