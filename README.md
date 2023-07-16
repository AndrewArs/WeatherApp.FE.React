# WeatherApp.FE.React

### Technologies used:

- React TypeScript
- Vite
- yarn
- Docker

### Libraries used:

- **Material UI** - for styling
- **Redux** - for state management
- **axios** - for HTTP requests
- **react-router-dom** - for routing
- **swagger-typescript-api** - for generating API models by swagger

#### Steps to run the project locally:

- install Docker
- pull back-end from here [WeatherApp.BE](https://github.com/AndrewArs/WeatherApp.BE.AspNetCore)
- start the back-end server and apply database migrations
- start the front-end in docker using `yarn deploy:docker`
- browse http://localhost:3000

### Available scripts:

All scripts can be executed by calling `yarn script_name`

- **dev** - starts dev server
- **deploy:docker** - script used to deploy app locally to the docker container
- **build:docker** - used in docker deploy script. Just builds an application with .env.docker
- **build** - builds production code in the folder _dist_
- **lint** - runs eslint
- **generate:api** - used for generating API.ts from swagger schema retrieved from the local back-end server
