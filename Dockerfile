FROM node:16.15-alpine3.14

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN adduser -S app

COPY . .
# COPY db_init.sql /docker-entrypoint-initdb.d/
# COPY init.sh /docker-entrypoint-initdb.d/

RUN npm install
RUN npm install --save pm2


RUN chown -R app /opt/app

USER app

EXPOSE 5000
CMD [ "npm", "run", "deploy" ]
