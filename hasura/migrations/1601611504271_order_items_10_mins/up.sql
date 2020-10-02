CREATE VIEW order_items_10_mins AS (
	SELECT 
		time_bucket('10 minutes', ordered_at) AS bucket,
		v.name as venue,
		mi.name as menu_item,
		COUNT(*) as count,
		MAX(oi.ordered_at) as last_order
	FROM order_items oi
	LEFT OUTER JOIN menu_items mi on (mi.id = oi.menu_item_id)
	LEFT OUTER JOIN venues v on (v.id = oi.venue_id)
	WHERE 
		ordered_at > NOW() - interval '48 hours' 
	GROUP BY 
		bucket, v.name, mi.name
	ORDER BY 
		bucket DESC, count DESC
);
