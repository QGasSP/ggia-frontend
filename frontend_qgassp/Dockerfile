FROM node:17.3.0-alpine3.14
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
RUN yarn install --silent
COPY . ./
CMD ["yarn", "start"]
