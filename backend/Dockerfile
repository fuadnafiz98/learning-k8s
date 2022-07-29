FROM node:18

RUN mkdir /usr/app/

WORKDIR /usr/app/

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node . .

RUN npm run build

RUN npx prisma generate

EXPOSE 8000

CMD npx prisma migrate deploy && npm run start
