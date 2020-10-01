CREATE TABLE venues (
    id bigserial PRIMARY KEY,
    osm_id text NOT NULL,
    name text NOT NULL,
    tags jsonb NOT NULL,
    long float8 NOT NULL,
    lat float8 NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW(),
    deleted_at timestamp DEFAULT NULL
);

CREATE TRIGGER update_venues_timestamp
    BEFORE UPDATE ON venues
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp ();

CREATE UNIQUE INDEX venues_osm_id ON venues (osm_id);
