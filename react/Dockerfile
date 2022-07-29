FROM node:16 as bundler

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=bundler /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
