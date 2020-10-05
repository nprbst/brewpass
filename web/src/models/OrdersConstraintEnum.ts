/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum OrdersConstraint {
  orders_pkey="orders_pkey"
}

/**
* OrdersConstraint
 *
 * unique or primary key constraints on table "orders"
*/
export const OrdersConstraintEnumType = types.enumeration("OrdersConstraint", [
        "orders_pkey", // unique or primary key constraint
      ])
