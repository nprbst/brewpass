/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesVarPopFieldsBase
 * auto generated base class for the model NearbyVenuesVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const NearbyVenuesVarPopFieldsModelBase = ModelBase
  .named('NearbyVenuesVarPopFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_var_pop_fields"), "nearby_venues_var_pop_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesVarPopFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesVarPopFields() {
  return new NearbyVenuesVarPopFieldsModelSelector()
}

export const nearbyVenuesVarPopFieldsModelPrimitives = selectFromNearbyVenuesVarPopFields().lat.long
