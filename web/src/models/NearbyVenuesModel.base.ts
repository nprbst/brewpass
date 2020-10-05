/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesBase
 * auto generated base class for the model NearbyVenuesModel.
 *
 * SETOF table for nearest venues   columns and relationships of "nearby_venues"
 */
export const NearbyVenuesModelBase = ModelBase
  .named('NearbyVenues')
  .props({
    __typename: types.optional(types.literal("nearby_venues"), "nearby_venues"),
    lat: types.union(types.undefined, types.frozen()),
    long: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromNearbyVenues() {
  return new NearbyVenuesModelSelector()
}

export const nearbyVenuesModelPrimitives = selectFromNearbyVenues().lat.long.name
