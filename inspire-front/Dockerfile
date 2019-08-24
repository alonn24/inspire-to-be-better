# Source https://github.com/BretFisher/node-docker-good-defaults
FROM node:10

# set our node environment, either development or production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 3000 for node, and 4000 for debug
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT 4000

# install dependencies
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

RUN yarn && yarn cache clean --force
COPY . /var/www/app
RUN yarn build

CMD [ "yarn", "start" ]
