FROM php:5.6-apache

RUN apt-get update && \
 apt-get install -y vim
 
COPY conf/ /etc/apache2/

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*

#docker build -t res/apache_rp .
#docker run -p 8080:80 res/apache_rp