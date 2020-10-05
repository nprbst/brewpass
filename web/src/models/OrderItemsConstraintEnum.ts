/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrderItemsConstraint {
  order_items_pkey="order_items_pkey"
}

/**
* OrderItemsConstraint
 *
 * unique or primary key constraints on table "order_items"
*/
export const OrderItemsConstraintEnumType = types.enumeration("OrderItemsConstraint", [
        "order_items_pkey", // unique or primary key constraint
      ])
