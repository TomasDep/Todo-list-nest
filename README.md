<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# TODO List

# Technologies

* Nest.Js
* MongoDB
* Docker

## DataBase Config

```
docker-compose up -d
```

## Insert Data Base Endpoint
```
/api/v1/seed
```

## Production Build
* Create __.env.prod__
* Create new image with next command
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```