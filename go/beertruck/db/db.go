package db

import (
	"context"
	"errors"
	"time"

	pg "github.com/go-pg/pg/v10"
)

var ErrNoRowsCreated = errors.New("no rows created")

type DB struct {
	pg *pg.DB
}

func New(pgURI string) (*DB, error) {
	pgdb, err := createPGConn(pgURI)
	if err != nil {
		return nil, err
	}

	return &DB{pg: pgdb}, nil
}

func (db *DB) PG() *pg.DB {
	return db.pg
}

func createPGConn(pgURI string) (*pg.DB, error) {
	opt, err := pg.ParseURL(string(pgURI))
	if err != nil {
		return nil, err
	}

	db := pg.Connect(opt)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	if err := db.Ping(ctx); err != nil {
		return nil, err
	}

	return db, nil
}
