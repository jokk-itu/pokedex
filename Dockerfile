# syntax=docker/dockerfile:1
FROM node:14.18-buster-slim
WORKDIR /usr/src/app
EXPOSE 3000
COPY ./ ./
RUN npm install
RUN npm run build
RUN rm -r node_modules
ENTRYPOINT ["npm", "run", "preview"]
##ENTRYPOINT ["node", "build/index.js"]