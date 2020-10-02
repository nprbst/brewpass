CREATE TABLE orders (
    id bigserial PRIMARY KEY,
    venue_id bigint NOT NULL REFERENCES venues (id),
    display text NOT NULL,
    ordered_at timestamp NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW()
);

