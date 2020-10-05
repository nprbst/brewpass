/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrdersUpdateColumn {
  created_at="created_at",
display="display",
id="id",
ordered_at="ordered_at",
venue_id="venue_id"
}

/**
* OrdersUpdateColumn
 *
 * update columns of table "orders"
*/
export const OrdersUpdateColumnEnumType = types.enumeration("OrdersUpdateColumn", [
        "created_at", // column name
  "display", // column name
  "id", // column name
  "ordered_at", // column name
  "venue_id", // column name
      ])
