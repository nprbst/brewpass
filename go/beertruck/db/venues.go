package db

import (
	"context"
	"time"
)

// Venue is the database type for a venue
type Venue struct {
	ID        uint64
	OsmID     string
	Name      string
	Tags      map[string]string
	Lat, Long float64
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time
}

// CreateVenue creates a new venue, or returns an error.
func (db *DB) CreateVenue(ctx context.Context, venue Venue) (*Venue, error) {

	res, err := db.pg.ModelContext(ctx, &venue).
		OnConflict("DO NOTHING").
		Insert()
	if err != nil {
		return nil, err
	}

	if res.RowsAffected() != 1 {
		return nil, ErrNoRowsCreated
	}

	return &venue, nil
}
