/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesSumFieldsBase
 * auto generated base class for the model NearbyVenuesSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const NearbyVenuesSumFieldsModelBase = ModelBase
  .named('NearbyVenuesSumFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_sum_fields"), "nearby_venues_sum_fields"),
    lat: types.union(types.undefined, types.null, types.frozen()),
    long: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesSumFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesSumFields() {
  return new NearbyVenuesSumFieldsModelSelector()
}

export const nearbyVenuesSumFieldsModelPrimitives = selectFromNearbyVenuesSumFields().lat.long
