# using node alpine as base image
FROM node:bullseye-slim as build

# working dir ./app
WORKDIR /app

# Copy react package.json
COPY ./package.json .

# install dependencies
RUN npm install

# COPY client directory folder
COPY . .

# default command
CMD ["npm", "start"]

### STAGE 2: Production Environment ###
###FROM node:bullseye-slim
###COPY --from=build /app/dist /usr/share/nginx/html
###EXPOSE 80
###CMD ["nginx", "-g", "daemon off;"]