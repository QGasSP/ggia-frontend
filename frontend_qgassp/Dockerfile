FROM node:18-alpine                                                                                        
WORKDIR /app
ENV PATH "/app/node_modules/.bin:$PATH"
COPY package.json ./
RUN apk add --no-cache bash
RUN yarn install --silent
COPY . ./
RUN ./buildWithPrefix https://ggia.ulno.net false
CMD ["./serveBuild"]
