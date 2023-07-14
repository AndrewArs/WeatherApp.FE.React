# WeatherApp.FE.React

### Technologies used:

- React TypeScript
- Vite
- yarn
- Docker

### Libraries used:

- **Material UI** - for styling
- **Redux** - for state management
- **axios** - for http requests
- **react-router-dom** - for routing
- **swagger-typescript-api** - for generating API models by swagger

#### Steps to run project locally:

- install Docker
- pull back-end from here [WeatherApp.BE](https://github.com/AndrewArs/WeatherApp.BE.AspNetCore)
- start the back-end and apply database migrations
- start the front-end in docker using [start-docker.bat](start-docker.bat)
- browse http://localhost:3000

### Available scripts:

All scripts can be executed by calling `yarn script_name`

- **dev** - starts dev server
- **build:docker** - used in docker deploy script. Just builds application with .env.docker
- **build** - builds production code in the folder _dist_
- **lint** - runs eslint
- **generate:api** - used for generate API.ts from swagger schema retrieved from local Back end server