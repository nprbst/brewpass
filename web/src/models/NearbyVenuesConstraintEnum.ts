/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum NearbyVenuesConstraint {
  nearby_venues_pkey="nearby_venues_pkey"
}

/**
* NearbyVenuesConstraint
 *
 * unique or primary key constraints on table "nearby_venues"
*/
export const NearbyVenuesConstraintEnumType = types.enumeration("NearbyVenuesConstraint", [
        "nearby_venues_pkey", // unique or primary key constraint
      ])
