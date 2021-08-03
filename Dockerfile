FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install
# RUN npm ci --only=production

COPY . .

EXPOSE 8000

CMD ["npm", "start"]