/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderItemsSelectColumn {
  created_at="created_at",
id="id",
menu_item_id="menu_item_id",
order_id="order_id",
ordered_at="ordered_at",
venue_id="venue_id"
}

/**
* OrderItemsSelectColumn
 *
 * select columns of table "order_items"
*/
export const OrderItemsSelectColumnEnumType = types.enumeration("OrderItemsSelectColumn", [
        "created_at", // column name
  "id", // column name
  "menu_item_id", // column name
  "order_id", // column name
  "ordered_at", // column name
  "venue_id", // column name
      ])
