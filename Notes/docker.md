 # Docker
 =======
 Dockerization is a process for making the running of our application regadless of any other dependency

## Container
=================
container can create copies

## Daemon
============


to create an ubuntu image
---------------------------
1. open cmd
2. docket run -it ubuntu
    -it -> interactive
        This will create an ubuntu image and a container for the ubuntu image in docker
        and the control of the cmd will move inside the ubuntu
        we can check it using ls or whoami

docker container ls -> List running containers
docker container ls -a -> list all containers
docker start container_name
docker stop container_name
docker exec container_name command -> for executing some commands inside the container

Images 

Custom Images

| Concept              | What it is                                                       | Example                         |
| -------------------- | ---------------------------------------------------------------- | ------------------------------- |
| 🧱 **Image**         | A *blueprint* or template (read-only) for a service              | `slotflow-main-backend:latest`  |
| 📦 **Container**     | A *running instance* of that image                               | `slotflow-infra_main-backend_1` |
| 🧩 **Compose stack** | A group of containers started together from `docker-compose.yml` | `slotflow-infra`                |


Broker and Controller 

Kafka Raft


Port Mapping
===============
A conatiner is running in a port 1025 , it is actually the internal port inside the container
we can access the port outlise of it 

for example if a nodejs container is running in port 8000 we cant access http://localhost:8000 in our local machine

for accessing it we need to do port mapping

docker run -it -p 8000:8000

first 8000 is my machines port and the second 8000 is the internal port of the container

-p port mapping

8000:8000 telling that the container expose the 8000 internal port to my machines 8000 port


so if we justt run the image we cant access that outside of the container

Environment Variables
======================
docker run -t -p 8000:8000  -e key=value containername


Each container runs in its own isolated network namespace — its own “mini network”.

Inside that mini network, localhost means the container itself, not your host or another container.

So if your backend (running inside Docker) tries to reach localhost:9092, it’s actually looking for a Kafka inside itself — which doesn’t exist.


## create a Docker network (one-time)
Why Docker networks exist

Docker networks are the bridge that allows containers to talk to each other directly by name.

When you create a network and attach both containers to it:

Docker automatically creates an internal DNS.

Containers can resolve each other by container name.

So your backend can connect to kafka:9092, and Docker knows how to route that traffic internally.


## What happens without Docker

When you run everything locally (e.g., NodeJS servers, Kafka, MongoDB) on your host machine:

They all share the same network stack (your Windows network).

So when your backend connects to localhost:9092 (Kafka) or localhost:27017 (MongoDB), it works — because localhost means “this computer”, and all processes are on it.

That’s why everything worked fine in development.

## What changes inside Docker

When you run a container:

Each container runs in its own isolated network namespace — its own “mini network”.

Inside that mini network, localhost means the container itself, not your host or another container.

So if your backend (running inside Docker) tries to reach localhost:9092, it’s actually looking for a Kafka inside itself — which doesn’t exist.

That’s why your backend says “Kafka not running” even though Kafka is up — it’s just in a different container network.


## Why “just exposing ports” isn’t enough

Exposing ports (-p 9092:9092) makes the service available to your host machine, not to other containers.

Here’s how it behaves:

✅ Your host (Windows, VSCode, curl, browser) can reach localhost:9092

❌ Other containers (like your backend) cannot use localhost:9092 — because inside Docker, localhost points to themselves.

So even if you expose Kafka’s port correctly, your backend container can’t talk to it unless:

both are on the same network, or

the backend uses the special hostname host.docker.internal (works only in some cases and not cross-container on Linux).


command to list all containers inside a network named slotflow-network
docker network inspect slotflow-network

command to connect a container to a network
docker network connect slotflow-network slotflow-notification-backend

command to restart a container from cmd
docker restart slotflow-notification-backend



after creating image we need to expose the port
for that we need to run the command with env

for the env adding, we need to run this command from the project directory

docker run --env-file .env -p 3000:3000 slotflow-main-backend