#!/bin/bash


docker-compose -p smarties up -d
# $? represents the exit code value of the previous command, which in our case is the result of yarn test
if [ $? -eq 0 ]
then
    container_name=smarties
    # Check if the containers are running
    container=$(exec docker ps --filter "name=$container_name" --format "{{.Names}}")
    if [ -z "$container" ]
    then 
        echo "container doesn't exist"
    else
        echo container exists
        exec docker exec -it $container /bin/sh -c "yarn install; /bin/sh;"
        exit
    fi
else
    echo "Error occurred, please try running 'docker-compose -p smarties up -d --build' to build the containers"
fi