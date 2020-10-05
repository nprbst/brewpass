/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesStddevSampFieldsBase
 * auto generated base class for the model NearbyVenuesStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const NearbyVenuesStddevSampFieldsModelBase = ModelBase
  .named('NearbyVenuesStddevSampFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_stddev_samp_fields"), "nearby_venues_stddev_samp_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesStddevSampFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesStddevSampFields() {
  return new NearbyVenuesStddevSampFieldsModelSelector()
}

export const nearbyVenuesStddevSampFieldsModelPrimitives = selectFromNearbyVenuesStddevSampFields().lat.long
