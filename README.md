# Using Redis as Queue

This application is an example of how to use Redis as a queue to implement a producer x consumer application
Bellow, how this application was implemented:

![AppDiagram](https://drive.usercontent.google.com/download?id=1kNE-EJMl33cKIlX7aJ04wak9_YRwN7FG)


## How to run
This application is using Docker and Docker Compose. To execute, run:
```
docker compose up
```

You can change the producer message rates setting the env vars RATE and DURATION on `docker-compose.yml`
Those values are in messages/second and seconds, respectively