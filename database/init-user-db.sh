#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --password "$POSTGRES_PASSWORD" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER juan WITH PASSWORD 'lolipop';
	CREATE DATABASE curriculumn;
	GRANT ALL PRIVILEGES ON DATABASE juan TO curriculumn;
EOSQL