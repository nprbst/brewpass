/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum NearbyVenuesUpdateColumn {
  lat="lat",
long="long",
name="name"
}

/**
* NearbyVenuesUpdateColumn
 *
 * update columns of table "nearby_venues"
*/
export const NearbyVenuesUpdateColumnEnumType = types.enumeration("NearbyVenuesUpdateColumn", [
        "lat", // column name
  "long", // column name
  "name", // column name
      ])
