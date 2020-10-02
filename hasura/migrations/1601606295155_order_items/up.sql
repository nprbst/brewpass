CREATE TABLE order_items (
    id bigserial NOT NULL,
    order_id bigint NOT NULL REFERENCES orders (id),
    venue_id bigint NOT NULL REFERENCES venues (id),
    menu_item_id bigint NOT NULL REFERENCES menu_items (id),
    ordered_at timestamp NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW(),
    PRIMARY KEY (ordered_at, id)
);

CREATE INDEX order_items_id_idx ON order_items (id);

-- This creates a hypertable that is partitioned by time using the values in the `ordered_at` column.
SELECT
    create_hypertable ('order_items', 'ordered_at');

