# *Pets finder & tracker* server

## Development
* First of all copy the `environment_DEFAULT.yml` file and rename its copy to `environment.yml`. There you can change the configuration as needed.

### Backend
* Run `docker-compuse up --build` in the root directory.
* To modify the server, just write the code and wait for the server to relaunch.
* This will launch your server in the browser [http://localhost:8000](http://localhost:8000)

## Frontend
* Access the frontend directory that you want.
* Run `yarn install` if is the first time you are accessing it.
* Run `yarn start` to start development.
* This will launch your frontend page in the browser [http://localhost:3000](http://localhost:3000)
* You'll be able to make requests to the local server. I.e. `axios.get('/api/v1/sample')`, this will automatically hit the localhost in port 8000 (`http://localhost:8000`)