
docker run -p 8000:90 home-remote-nginx


docker ps
docker stop <the-container-id>
docker rm <the-container-id>

docker run -d --restart unless-stopped <the-container-id>
docker update --restart unless-stopped <the-container-id>



docker ps
docker stop home-remote-nginx
docker rm home-remote-nginx
docker build -t home-remote-nginx .
docker run -p 8000:90 --restart unless-stopped home-remote-nginx