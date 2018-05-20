FROM node:4.4

COPY src /opt/app

WORKDIR /opt/app/
RUN npm install

CMD ["node", "/opt/app/index.js"]

#créer l'image
#docker build -t res/express_locations .

#fonctionnement en local...
#docker run res/express_locations
#dans un autre terminal : docker-machine ssh
#docker ps
#docker inspect ID
#telnet IP 3000

#fonctionnement distant
#docker run -p 9090:3000 res/express_students

#en mode interactif
#docker run -it res/express_locations /bin/bash
