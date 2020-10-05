/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum MenuItemsSelectColumn {
  created_at="created_at",
deleted_at="deleted_at",
id="id",
item_type="item_type",
name="name",
updated_at="updated_at",
venue_id="venue_id"
}

/**
* MenuItemsSelectColumn
 *
 * select columns of table "menu_items"
*/
export const MenuItemsSelectColumnEnumType = types.enumeration("MenuItemsSelectColumn", [
        "created_at", // column name
  "deleted_at", // column name
  "id", // column name
  "item_type", // column name
  "name", // column name
  "updated_at", // column name
  "venue_id", // column name
      ])
