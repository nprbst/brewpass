/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderItems10MinsSelectColumn {
  bucket="bucket",
count="count",
last_order="last_order",
menu_item="menu_item",
venue="venue"
}

/**
* OrderItems10MinsSelectColumn
 *
 * select columns of table "order_items_10_mins"
*/
export const OrderItems10MinsSelectColumnEnumType = types.enumeration("OrderItems10MinsSelectColumn", [
        "bucket", // column name
  "count", // column name
  "last_order", // column name
  "menu_item", // column name
  "venue", // column name
      ])
