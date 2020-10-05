/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderItemsUpdateColumn {
  created_at="created_at",
id="id",
menu_item_id="menu_item_id",
order_id="order_id",
ordered_at="ordered_at",
venue_id="venue_id"
}

/**
* OrderItemsUpdateColumn
 *
 * update columns of table "order_items"
*/
export const OrderItemsUpdateColumnEnumType = types.enumeration("OrderItemsUpdateColumn", [
        "created_at", // column name
  "id", // column name
  "menu_item_id", // column name
  "order_id", // column name
  "ordered_at", // column name
  "venue_id", // column name
      ])
