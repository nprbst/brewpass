/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderItemsByHourSelectColumn {
  count="count",
hour_of_day="hour_of_day",
id="id",
last_order="last_order",
menu_item="menu_item",
menu_item_id="menu_item_id",
venue="venue",
venue_id="venue_id"
}

/**
* OrderItemsByHourSelectColumn
 *
 * select columns of table "order_items_by_hour"
*/
export const OrderItemsByHourSelectColumnEnumType = types.enumeration("OrderItemsByHourSelectColumn", [
        "count", // column name
  "hour_of_day", // column name
  "id", // column name
  "last_order", // column name
  "menu_item", // column name
  "menu_item_id", // column name
  "venue", // column name
  "venue_id", // column name
      ])
