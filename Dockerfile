# syntax=docker/dockerfile:1
FROM node:14.18-buster-slim AS build
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN npm run build

FROM node:14.18-buster-slim AS production
WORKDIR /usr/src/app
EXPOSE 3000
COPY --from=build /usr/src/app/build/ ./
ENTRYPOINT ["node", "index.js"]