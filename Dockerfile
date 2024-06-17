FROM node:22-alpine3.19


# create a new user that can only run the app
RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./


USER root

RUN chown -R app:app /app


RUN yarn install

COPY . .

RUN yarn build

USER app

EXPOSE 3000

CMD yarn start