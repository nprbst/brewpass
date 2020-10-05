/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum VenuesUpdateColumn {
  created_at="created_at",
deleted_at="deleted_at",
id="id",
lat="lat",
long="long",
name="name",
osm_id="osm_id",
tags="tags",
updated_at="updated_at"
}

/**
* VenuesUpdateColumn
 *
 * update columns of table "venues"
*/
export const VenuesUpdateColumnEnumType = types.enumeration("VenuesUpdateColumn", [
        "created_at", // column name
  "deleted_at", // column name
  "id", // column name
  "lat", // column name
  "long", // column name
  "name", // column name
  "osm_id", // column name
  "tags", // column name
  "updated_at", // column name
      ])
