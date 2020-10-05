/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum NearbyVenuesSelectColumn {
  lat="lat",
long="long",
name="name"
}

/**
* NearbyVenuesSelectColumn
 *
 * select columns of table "nearby_venues"
*/
export const NearbyVenuesSelectColumnEnumType = types.enumeration("NearbyVenuesSelectColumn", [
        "lat", // column name
  "long", // column name
  "name", // column name
      ])
