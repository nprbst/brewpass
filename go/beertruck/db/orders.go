package db

import (
	"context"
	"fmt"
	"strings"
	"time"

	pg "github.com/go-pg/pg/v10"
)

type Order struct {
	ID        uint64
	VenueID   uint64
	Display   string
	OrderedAt time.Time
	CreatedAt time.Time
}

type OrderItem struct {
	ID         uint64
	VenueID    uint64
	OrderID    uint64
	MenuItemID uint64
	OrderedAt  time.Time
	CreatedAt  time.Time
}

type CreateOrderRequest struct {
	Venue     *Venue
	Items     []*MenuItem
	Display   string
	OrderedAt time.Time
}

func (o CreateOrderRequest) String() string {
	var items []string
	for _, i := range o.Items {
		items = append(items, i.Name)
	}
	return fmt.Sprintf("%s with %s from %s",
		items[0], strings.Join(items[1:], " and "), o.Venue.Name)
}

// CreateMenuItem creates a new menu item, or returns an error.
func (db *DB) CreateOrder(ctx context.Context, req CreateOrderRequest) (*Order, error) {

	order := &Order{
		VenueID:   req.Venue.ID,
		Display:   req.String(),
		OrderedAt: req.OrderedAt,
	}

	err := db.pg.RunInTransaction(ctx, func(dbTx *pg.Tx) error {
		_, err := dbTx.ModelContext(ctx, order).
			OnConflict("DO NOTHING").
			Insert()
		if err != nil {
			return err
		}

		var items []*OrderItem
		for _, item := range req.Items {
			items = append(items, &OrderItem{
				OrderID:    order.ID,
				VenueID:    item.VenueID,
				MenuItemID: item.ID,
				OrderedAt:  req.OrderedAt,
			})
		}

		res, err := dbTx.ModelContext(ctx, &items).
			OnConflict("DO NOTHING").
			Insert()
		if err != nil {
			return err
		}

		if res.RowsAffected() == 0 {
			return ErrNoRowsCreated
		}

		return nil
	})

	return order, err
}
