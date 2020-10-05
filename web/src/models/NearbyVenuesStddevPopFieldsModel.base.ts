/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesStddevPopFieldsBase
 * auto generated base class for the model NearbyVenuesStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const NearbyVenuesStddevPopFieldsModelBase = ModelBase
  .named('NearbyVenuesStddevPopFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_stddev_pop_fields"), "nearby_venues_stddev_pop_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesStddevPopFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesStddevPopFields() {
  return new NearbyVenuesStddevPopFieldsModelSelector()
}

export const nearbyVenuesStddevPopFieldsModelPrimitives = selectFromNearbyVenuesStddevPopFields().lat.long
