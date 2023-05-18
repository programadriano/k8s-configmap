FROM node:14

#ENV MONGO_URL="uri"
#ENV REDIS_URL="uri2"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm","start" ]