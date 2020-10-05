CREATE VIEW order_items_by_hour AS (
	SELECT
	    CONCAT('_', mi.id, '_', date_part('hour'::text, oi.ordered_at)) as id,
		date_part('hour'::text, oi.ordered_at) AS hour_of_day,
		v.id as venue_id,
		v.name as venue,
		mi.id as menu_item_id,
		mi.name as menu_item,
		COUNT(*) as count,
		MAX(oi.ordered_at) as last_order
	FROM order_items oi
	LEFT OUTER JOIN menu_items mi on (mi.id = oi.menu_item_id)
	LEFT OUTER JOIN venues v on (v.id = oi.venue_id)
	WHERE 
		ordered_at > NOW() - interval '48 hours' 
	GROUP BY 
		hour_of_day, v.id, mi.id
	ORDER BY 
		count DESC
);
