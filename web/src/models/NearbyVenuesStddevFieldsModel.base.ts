/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesStddevFieldsBase
 * auto generated base class for the model NearbyVenuesStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const NearbyVenuesStddevFieldsModelBase = ModelBase
  .named('NearbyVenuesStddevFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_stddev_fields"), "nearby_venues_stddev_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesStddevFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesStddevFields() {
  return new NearbyVenuesStddevFieldsModelSelector()
}

export const nearbyVenuesStddevFieldsModelPrimitives = selectFromNearbyVenuesStddevFields().lat.long
