DO
$do$
BEGIN
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    IF NOT EXISTS (
        SELECT
        FROM   pg_catalog.pg_roles
        WHERE  rolname = 'API_QUEEN_AND_SLIM') THEN

        CREATE ROLE "API_QUEEN_AND_SLIM" WITH
            LOGIN
            PASSWORD 'P@ssw0rd!'
            NOSUPERUSER
            NOINHERIT
            NOCREATEROLE
            NOREPLICATION;
   END IF;
END
$do$;

