/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum MenuItemsConstraint {
  menu_items_pkey="menu_items_pkey",
menu_items_venue_id_name="menu_items_venue_id_name"
}

/**
* MenuItemsConstraint
 *
 * unique or primary key constraints on table "menu_items"
*/
export const MenuItemsConstraintEnumType = types.enumeration("MenuItemsConstraint", [
        "menu_items_pkey", // unique or primary key constraint
  "menu_items_venue_id_name", // unique or primary key constraint
      ])
