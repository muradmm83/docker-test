FROM node:lts-slim as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build-prod

FROM node:lts-slim as deploy

WORKDIR /app

COPY package.json .

COPY --from=build /app/dist ./dist

COPY --from=build /app/node_modules ./node_modules

COPY ./.env .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]