CREATE TYPE menu_item_type AS ENUM (
    'beer',
    'breakfast',
    'snack',
    'lunch',
    'dinner',
    'dessert'
);

CREATE TABLE menu_items (
    id bigserial PRIMARY KEY,
    venue_id bigint NOT NULL REFERENCES venues (id),
    item_type menu_item_type NOT NULL,
    name text NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW(),
    deleted_at timestamp DEFAULT NULL
);

CREATE TRIGGER update_menu_items_timestamp
    BEFORE UPDATE ON menu_items
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp ();

CREATE UNIQUE INDEX menu_items_venue_id_name ON menu_items (venue_id, name);

