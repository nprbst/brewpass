/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesVarSampFieldsBase
 * auto generated base class for the model NearbyVenuesVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const NearbyVenuesVarSampFieldsModelBase = ModelBase
  .named('NearbyVenuesVarSampFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_var_samp_fields"), "nearby_venues_var_samp_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesVarSampFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesVarSampFields() {
  return new NearbyVenuesVarSampFieldsModelSelector()
}

export const nearbyVenuesVarSampFieldsModelPrimitives = selectFromNearbyVenuesVarSampFields().lat.long
