FROM node:alpine
WORKDIR /usr/src/app

# Build time environment variables
ARG REACT_APP_ENV=production
ARG REACT_APP_API_HOST=https://ardent-api.ardentlabs.io
ARG REACT_APP_LOGIN_URL=https://account.ardentlabs.io/login

ENV REACT_APP_ENV=${REACT_APP_ENV}
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_LOGIN_URL=${REACT_APP_LOGIN_URL}

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# Build app
COPY src src
COPY public public
RUN npm run build

# Bundle as an nginx static file hosting server
FROM nginx:alpine
COPY --from=0 /usr/src/app/build /var/www/ardent-welcome
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
