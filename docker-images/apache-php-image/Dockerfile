FROM php:5.6-apache

RUN apt-get update && \
 apt-get install -y vim

COPY content/ /var/www/html/

#docker build -t res/apache_php .
#docker run -p 9090:80 res/apache_php