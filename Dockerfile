FROM ubuntu:latest
MAINTAINER Stephane Kibonge "kibonge@gmail.com"

USER root

RUN apt-get update
RUN apt-get install -y nginx nodejs

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/
ADD mime.types /etc/nginx/

ADD css /usr/share/nginx/html/
ADD js /usr/share/nginx/html/
ADD webfonts /usr/share/nginx/html/
ADD favicon /usr/share/nginx/html/
ADD index.html /usr/share/nginx/html/

ADD css /var/www/html/
ADD js /var/www/html/
ADD webfonts /var/www/html/
ADD favicon /var/www/html/
ADD index.html /var/www/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

# Expose ports
EXPOSE 90

# Set the default command to execute
# when creating a new container
CMD service nginx start