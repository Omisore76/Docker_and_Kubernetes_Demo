# Docker_and_Kubernetes_Demo

You will find a very fundamental nodeJS application in this repo. Furthermore, the dockerfile required to build a docker image of the application is included. Lastly, the yaml file for deploying the docker image onto kubernetes can be found here.

The goal of the project is to build a nodeJS application, dockerize it, and deploy it on Kubernetes.

## Introduction 

### NodeJS

NodeJS is a powerful JavaScript-based platform that is widely used for developing web and network applications. It is open source, cross-platform, and provides a large number of features and libraries that make it an ideal choice for building scalable and effective applications. 

NodeJS also has a number of benefits that make it an attractive option for developers, including its asyncronous programming model, its high performance, and its ability to handle large amounts of data.

### Docker 

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. 

By using containers, you can ensure that your applications will always run the same, regardless of the environment in which they are deployed. Additionally, Docker can make it much easier to share your applications with others, allowing them to quickly get up and running with your software.

Docker containers can be run on any computer that has the Docker program installed. This makes it much easier to move applications from one computer to another. 

### Kubernetes

Kubernetes is an open source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation. 

Kubernetes can be used to manage both Linux and Windows containers, and is popularly used in conjunction with Docker. It offers a various benefits such as improved performance, scalability, and increased efficiency. One of the main benefits of Kubernetes is its ability to improve performance. By using Kubernetes, organizations can increase the number of applications that can be run on a single server. 

## Prerequisite

To utilize this repo, the following must be available on your local machine:

* Node.js and NPM. Learn how to install Node.js and NPM [Here](https://nodejs.org/en/download/). 
* Docker. Learn how to install docker [Here](https://docs.docker.com/desktop/install/windows-install/). 
* Minikube and kubectl installed. Learn how to do that [Here](https://minikube.sigs.k8s.io/docs/start/).

