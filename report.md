# RES-2018-HTTPInfra

## Introduction

This is the result of the last lab in the course RES 2018 at HEIG-VD. The mains objectives of this lab is to configure a complete web infrastructure and implement a simple dynamic web application.



## Step 1: Static HTTP server with apache httpd

### Configuration

In that first step, we have created a Dockerfile to create a apache-php web server and added a simple website into it. 

Dockerfile :

```dockerfile
#get official the server image on the web
FROM php:5.6-apache 

#copy the content of the "content/" folder in the default web folder of the server. The content of this folder will be sent to the browser
COPY content/ /var/www/html/ 
```

Docker commands to run it :

```powershell
cd docker-images/apache-php-image/
docker build -t res/apache_php .
docker run -p 9090:80 res/apache_php
```

A test website is already in the "content/" folder : [https://startbootstrap.com/template-overviews/agency/](https://startbootstrap.com/template-overviews/agency/)



### Acceptance criteria

- You have a GitHub repo with everything needed to build the Docker image. ✔
- You do a demo, where you build the image, run a container and access content from a browser. ✔
- You have used a nice looking web template, different from the one shown in the webcast. ✔
- You are able to explain what you do in the Dockerfile. ✔
- You are able to show where the apache config files are located (in a running container). ✔
- You have documented your configuration in your report. ✔



## Step 2: Dynamic HTTP server with express.js

### Configuration

In that second step we have created a dynamic HTTP server with express.js. 

Dockerfile :

```dockerfile
#specify the nodejs version
FROM node:4.4

#copy the folder src in the docker image
COPY src /opt/app

#change the working directory (cd..)
WORKDIR /opt/app/

#install dependencies
RUN npm install

#start the nodejs server
CMD ["node", "/opt/app/index.js"]
```

Docker commands to run it :

```powershell
cd docker-images/express-image/

#create the docker image
docker build -t res/express_locations .
```

Acces into docker machine

```dockerfile
#start the image
docker run res/express_locations

#into another docker terminal, to go into the docker machine
docker-machine ssh

#to get the image id
docker ps

#to get the IP address of the image running
docker inspect [ID]

#to connect to the server
telnet [IP] 3000
```

Acces into our environment 

```dockerfile
#start the image
docker run -p 9090:3000 res/express_students

#just go into Postman or our browser

#OPTIONAL - interfactive...
docker run -it res/express_locations /bin/bash
```



### Acceptance criteria

- You have a GitHub repo with everything needed to build the Docker image. ✔

- You do a demo, where you build the image, run a container and access content from a browser. ✔

- You generate dynamic, random content and return a JSON payload to the client. ✔

- You cannot return the same content as the webcast (you cannot return a list of people). ✔

- You don't have to use express.js; if you want, you can use another JavaScript web framework or event another language. ✔

- You have documented your configuration in your report. ✔

  ​

## Step 3: Reverse proxy with apache (static configuration)

### Configuration

$ docker run -d --name apache_static res/apache_php

$ docker run -d --name express_dynamic res/express_locations 

$ docker inspect apache_static | grep -i ipaddress -> 172.17.0.2

$ docker inspect express_dynamic | grep -i ipaddress -> 172.17.0.3



Pour voir fonctionner...

$ docker-machine ssh

telnet 172.17.0.3 3000

GET / HTTP/1.0 (puis deux fois enter)

### Acceptance criteria

- You have a GitHub repo with everything needed to build the Docker image for the container.

- You do a demo, where you start from an "empty" Docker environment (no container running) and where you start 3 containers: static server, dynamic server and reverse proxy; in the demo, you prove that the routing is done correctly by the reverse proxy.

- You can explain and prove that the static and dynamic servers cannot be reached directly (reverse proxy is a single entry point in the infra).

- You are able to explain why the static configuration is fragile and needs to be improved.

- You have documented your configuration in your report.

  ​

## Step 4: AJAX requests with JQuery

### Configuration



### Acceptance criteria

- You have a GitHub repo with everything needed to build the various images.

- You do a complete, end-to-end demonstration: the web page is dynamically updated every few seconds (with the data coming from the dynamic backend).

- You are able to prove that AJAX requests are sent by the browser and you can show the content of th responses.

- You are able to explain why your demo would not work without a reverse proxy (because of a security restriction).

- You have documented your configuration in your report.

  ​

## Step 5: Dynamic reverse proxy configuration

### Configuration



### Acceptance criteria

- You have a GitHub repo with everything needed to build the various images.

- You have found a way to replace the static configuration of the reverse proxy (hard-coded IP adresses) with a dynamic configuration.

- You may use the approach presented in the webcast (environment variables and PHP script executed when the reverse proxy container is started), or you may use another approach. The requirement is that you should not have to rebuild the reverse proxy Docker image when the IP addresses of the servers change.

- You are able to do an end-to-end demo with a well-prepared scenario. Make sure that you can demonstrate that everything works fine when the IP addresses change!

- You are able to explain how you have implemented the solution and walk us through the configuration and the code.

- You have documented your configuration in your report.

  ​

## Additional steps

Soon...