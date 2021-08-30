FROM node:14-alpine

# WORKDIR /app
WORKDIR /usr/app


COPY package.json ./

RUN npm install
#RUN npm install --production

COPY . .

RUN npm run build

#COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

