# todolistapp

# Linux or OSX enviroment. Docker and docker-compose installed

cd todolistapp/dolistfrontend

cp .env.example .env

cd ..

docker-compose up


# Windows. Node.js 8 or 10 and yarn installed


cd todolistapp/dolistwithexpress

yarn


node src/index.js

cd todolistapp/dolistfrontend

cp .env.example .env

yarn

yarn run start
