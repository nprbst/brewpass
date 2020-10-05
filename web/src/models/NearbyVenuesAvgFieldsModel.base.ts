/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesAvgFieldsBase
 * auto generated base class for the model NearbyVenuesAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const NearbyVenuesAvgFieldsModelBase = ModelBase
  .named('NearbyVenuesAvgFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_avg_fields"), "nearby_venues_avg_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesAvgFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesAvgFields() {
  return new NearbyVenuesAvgFieldsModelSelector()
}

export const nearbyVenuesAvgFieldsModelPrimitives = selectFromNearbyVenuesAvgFields().lat.long
