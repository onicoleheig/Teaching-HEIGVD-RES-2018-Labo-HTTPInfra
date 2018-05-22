FROM php:5.6-apache

RUN apt-get update && \
 apt-get install -y vim
 
COPY apache2-foreground /usr/local/bin/
COPY template /var/apache2/templates
COPY conf/ /etc/apache2/

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*

#docker build -t res/apache_rp .
#docker run -e STATIC_APP=172.17.0.2:80 -e DYNAMIC_APP=172.17.0.3:3000 -p 8080:80 res/apache_rp