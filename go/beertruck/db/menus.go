package db

import (
	"context"
	"time"
)

type MenuItemType string

const (
	MenuItemTypeBeer      MenuItemType = "beer"
	MenuItemTypeBreakfast              = "breakfast"
	MenuItemTypeSnack                  = "snack"
	MenuItemTypeLunch                  = "lunch"
	MenuItemTypeDinner                 = "dinner"
	MenuItemTypeDessert                = "dessert"
)

// MenuItem is the database type for a menu
type MenuItem struct {
	ID        uint64
	VenueID   uint64
	ItemType  MenuItemType
	Name      string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time
}

// CreateMenuItem creates a new menu item, or returns an error.
func (db *DB) CreateMenuItem(ctx context.Context, mi MenuItem) (*MenuItem, error) {

	res, err := db.pg.ModelContext(ctx, &mi).
		OnConflict("DO NOTHING").
		Insert()
	if err != nil {
		return nil, err
	}

	if res.RowsAffected() != 1 {
		return nil, ErrNoRowsCreated
	}

	return &mi, nil
}

func (db *DB) AllMenuItemsByVenue(ctx context.Context, venueID uint64) ([]*MenuItem, error) {
	var items []*MenuItem
	err := db.pg.Model(&items).
		Where("venue_id = ?", venueID).
		Select()
	if err != nil {
		return nil, err
	}

	return items, nil
}

func (db *DB) AllMenuItemsByVenueAndType(ctx context.Context, venueID uint64, itemType MenuItemType) ([]*MenuItem, error) {
	var items []*MenuItem
	err := db.pg.Model(&items).
		Where("venue_id = ?", venueID).
		Where("item_type = ?", itemType).
		Select()
	if err != nil {
		return nil, err
	}

	return items, nil
}
