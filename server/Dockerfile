FROM node:13-alpine as NODE
ENV LAST_UPDATED 20191107T204600

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
 
# runs npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

# Install dependencies
RUN npm install -g -s --no-progress npm && \
    npm install -g -s --no-progress yarn

# Change working directory
COPY / /server
WORKDIR /server

USER root

# Install client dependencies and build client
RUN npm i -g sequelize-cli
RUN yarn

RUN chmod +x startup.sh

# Expose Container Port
EXPOSE 4000

ENTRYPOINT ["./startup.sh"]
# CMD ["yarn", "start"]
