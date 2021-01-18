docker build -t home-remote-nginx .
docker run -p 8000:90 home-remote-nginx


docker ps
docker stop <the-container-id>
docker rm <the-container-id>