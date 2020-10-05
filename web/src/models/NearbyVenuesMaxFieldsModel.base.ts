/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesMaxFieldsBase
 * auto generated base class for the model NearbyVenuesMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const NearbyVenuesMaxFieldsModelBase = ModelBase
  .named('NearbyVenuesMaxFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_max_fields"), "nearby_venues_max_fields"),
    lat: types.union(types.undefined, types.null, types.frozen()),
    long: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesMaxFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromNearbyVenuesMaxFields() {
  return new NearbyVenuesMaxFieldsModelSelector()
}

export const nearbyVenuesMaxFieldsModelPrimitives = selectFromNearbyVenuesMaxFields().lat.long.name
