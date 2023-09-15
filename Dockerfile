FROM node:20.6-alpine

WORKDIR /app/
COPY ./package.json ./
RUN npm install
CMD ["npm", "run", "dev"]
