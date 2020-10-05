/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum VenuesConstraint {
  venues_osm_id="venues_osm_id",
venues_pkey="venues_pkey"
}

/**
* VenuesConstraint
 *
 * unique or primary key constraints on table "venues"
*/
export const VenuesConstraintEnumType = types.enumeration("VenuesConstraint", [
        "venues_osm_id", // unique or primary key constraint
  "venues_pkey", // unique or primary key constraint
      ])
