# Jaden's smarties app

## Running the application locally
### React Application
- Change directory to wherever you'd like the repository to be stored, eg `cd ~/Repositories`.
- Clone this repository for the react application `git clone git@github.com:`.
- Change directory to the cloned repository folder `cd ./smarties`.
- Launch the smarties docker container and bash into it to for the react application `./bash-into-container.sh`.

NOTE: If running the shell script for the first time, you will need to provide sufficient user information. So run the following command:
`chmod 766 bash-into-container.sh`

- To start the application in dev, use the following command: `yarn start`

## Stop Docker Containers
To stop the docker containers run the following command:
`docker-compose stop`

After doing these steps, you will be able to access the react application locally on [localhost:8070](http://localhost:8070).

