#Version de la imagen que se usa
ARG version_base=node:alpine
ARG version_deploy=node:lts-alpine
#Stage 1 aca se define la imagen final que se usara
FROM  ${version_base} as base
ARG NODE_ENV = development
# Define default ports and host for app and db, mysql_db es el nombre del servicio en el docker compose 
ARG app_port=3000
ARG db_host=mysql_db
ARG db_port=3306
# Add important environment variables that the server consumes
ENV APP_PORT=${app_port}
ENV DB_HOST=${db_host}
ENV DB_PORT=${db_port}
#ENV IMAGE_VERSION = ${version}
ENV NODE_ENV = ${NODE_ENV}
COPY package*.json ./
# Specify working directory for the container
WORKDIR /usr/src
#WORKDIR /usr/src/app
# Add dependencies for the node modules (to be installed)
# Install node dependencies via npm
RUN npm install && npm run rebuild
#RUN npm ci && npm cache clean --force 
#RUN npm ci --only=production && npm run rebuild
#RUN npm ci && npm run rebuild && npm cache clean --force
COPY . .

#Segunda stage
FROM ${version_deploy} as deploy
COPY . . 
EXPOSE ${app_port}
CMD ["node", "app.js"] 
#docker-compose up --build se usa en la ruta de express-mysql