FROM node:10.16.3-alpine
#Create app directory
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/ 
 

# Bundle app source
COPY . /usr/src/app
RUN yarn 
EXPOSE 3000
CMD ["npm","start"]
