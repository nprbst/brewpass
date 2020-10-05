/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrdersSelectColumn {
  created_at="created_at",
display="display",
id="id",
ordered_at="ordered_at",
venue_id="venue_id"
}

/**
* OrdersSelectColumn
 *
 * select columns of table "orders"
*/
export const OrdersSelectColumnEnumType = types.enumeration("OrdersSelectColumn", [
        "created_at", // column name
  "display", // column name
  "id", // column name
  "ordered_at", // column name
  "venue_id", // column name
      ])
