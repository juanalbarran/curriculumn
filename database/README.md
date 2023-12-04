### Configure postgres locally
These steps are to configure locally the postgreSQL database

1. #### Download Postgres image
```bash
docker pull postgres
```
2. #### Create the volume
```
docker volume create postgres-data
```
2. #### Run the compose file
```bash
docker compose --file database/docker-compose-postgres.yml up -d
```