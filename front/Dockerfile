# Etap budowania
FROM node:16 AS build_stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build # wlasciwe budowanie aplikacji React

# Etap produkcji, wysytawienie na serwer Apache
FROM httpd:2.4
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=build_stage /app/build /usr/local/apache2/htdocs
