# Pull base image.
FROM ubuntu

RUN apt-get update 
RUN apt-get install -qq -y python-software-properties g++ make software-properties-common 
RUN add-apt-repository ppa:chris-lea/node.js 
RUN apt-get update 
RUN apt-get install -qq -y nodejs

ADD . /src
RUN cd /src; npm install
EXPOSE 8080
WORKDIR /src
CMD ["npm", "start"]
