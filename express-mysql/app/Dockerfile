#Version de la imagen que se usa
ARG version=node:alpine
#Stage 1 aca se define la imagen final que se usara
FROM  ${version} as base
ENV NODE_ENV production
# Define default ports and host for app and db, mysql_db es el nombre del servicio en el docker compose 
ARG app_port=3000
ARG db_host=mysql_db
ARG db_port=3306
# Add important environment variables that the server consumes
ENV APP_PORT=${app_port}
ENV DB_HOST=${db_host}
ENV DB_PORT=${db_port}
ENV imageVersion = ${version}
#COPY ["package.json", "package-lock.json", "/usr/src/"]
COPY package*.json ./
# Specify working directory for the container
WORKDIR /usr/src
#WORKDIR /app
# Add dependencies for the node modules (to be installed)
# Install node dependencies via npm
#RUN npm install && npm run rebuild 
RUN npm ci --only=production && npm run rebuild
COPY . .

#Segunda stage
FROM ${version} as deploy

#FROM base as deploy
# Add main app functionalities
# COPY ["app.js", "/usr/src/"]
# COPY ["./config/db.config.js", "/usr/src/config/"]
# COPY ["./db/model.js", "/usr/src/db/"]
# COPY ["./routes/developers.js", "/usr/src/routes/"]
COPY . . 
# hacer de aqui en adelante en otra stage
EXPOSE ${app_port}

CMD ["node", "app.js"] 
#docker-compose up --build se usa en la ruta de express-mysql