---
title: Docker
---

Docker is an open-source platform for developing, shipping, and running applications in lightweight, portable containers. Containers package software and its dependencies, ensuring consistency across environments and simplifying deployment.

---

## 🌟 Key Concepts

- **Image:** A snapshot of a filesystem and parameters needed to run an application.
- **Container:** A running instance of an image.
- **Dockerfile:** Script with instructions to build a Docker image.
- **Docker Hub:** Public registry for sharing and downloading images.

---

## 📚 Useful Links

- [Docker 101](https://github.com/Citrix-TechSpecialist/Docker-101)
- [Docker 101 Tutorial](https://www.docker.com/101-tutorial)
- [Linux Server](https://docs.linuxserver.io/)

---

## Cheat Sheet

### Images

```sh
docker build -t <image> .           # Build image from Dockerfile
docker build -t <image> . --no-cache # Build without cache
docker images                       # List local images
docker rmi <image>                  # Delete image
docker image prune                  # Remove all unused images
```

### Docker Hub

```sh
docker login -u <username>          # Login to Docker Hub
docker push <username>/<image>      # Publish image to Docker Hub
docker search <image>               # Search for image on Docker Hub
docker pull <image>                 # Pull image from Docker Hub
```

### General

```sh
docker -d                           # Start Docker daemon
docker --help                       # Get help
docker info                         # System-wide info
```

### Containers

```sh
docker run --name <name> <image>            # Create & run container
docker run -p <host>:<container> <image>    # Map ports
docker run -d <image>                       # Run in background
docker start|stop <name>                    # Start/stop container
docker rm <name>                            # Remove stopped container
docker exec -it <name> sh                   # Shell in running container
docker logs -f <name>                       # Follow container logs
docker inspect <name>                       # Inspect container
docker ps -a                                # List all containers
docker container stats                      # Resource usage stats
```

---

## 📝 Notes

- Use `.dockerignore` to exclude files from builds.
- Clean up unused images and containers regularly.
- Use volumes for persistent data.

---
