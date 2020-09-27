CREATE OR REPLACE FUNCTION update_timestamp ()
    RETURNS TRIGGER
    AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$
LANGUAGE 'plpgsql';

CREATE TABLE users (
    id varchar(255) NOT NULL PRIMARY KEY,
    name varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW(),
    deleted_at timestamp DEFAULT NULL
);

CREATE TRIGGER update_user_timestamp
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp ();

CREATE TABLE todos (
    id varchar(255) NOT NULL PRIMARY KEY,
    text varchar(255) NOT NULL,
    user_id varchar(255) REFERENCES users (id),
    created_at timestamp NOT NULL DEFAULT NOW(),
    updated_at timestamp NOT NULL DEFAULT NOW(),
    deleted_at timestamp DEFAULT NULL
);

CREATE TRIGGER update_todo_timestamp
    BEFORE UPDATE ON todos
    FOR EACH ROW
    EXECUTE PROCEDURE update_timestamp ();

