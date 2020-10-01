CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE public.nearby_venues (
    name text NOT NULL,
    lat double precision NOT NULL,
    long double precision NOT NULL
);

COMMENT ON TABLE public.nearby_venues IS 'SETOF table for nearest venues';

CREATE FUNCTION public.get_nearby_venues (lat double precision, long double precision, bound integer)
    RETURNS SETOF public.nearby_venues
    LANGUAGE sql
    STABLE
    AS $$
    SELECT
        name,
        ST_X (ST_Transform (ST_SetSRID (ST_Point (long, lat), 4326), 3857)) AS long,
        ST_Y (ST_Transform (ST_SetSRID (ST_Point (long, lat), 4326), 3857)) AS lat
    FROM
        venues
    WHERE
        ST_DWITHIN (ST_TRANSFORM (ST_SetSRID (ST_Point (long, lat), 4326), 3857), ST_TRANSFORM (ST_SetSRID (ST_Point (long, lat), 4326), 3857), bound);

$$;

ALTER TABLE ONLY public.nearby_venues
    ADD CONSTRAINT nearby_venues_pkey PRIMARY KEY (lat, name, long);
