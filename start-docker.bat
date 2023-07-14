docker build . -t weatherapp-react
docker stop weatherapp-react
docker rm weatherapp-react
docker run -p 3000:80 --name weatherapp-react -d weatherapp-react
