/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesVarianceFieldsBase
 * auto generated base class for the model NearbyVenuesVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const NearbyVenuesVarianceFieldsModelBase = ModelBase
  .named('NearbyVenuesVarianceFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_variance_fields"), "nearby_venues_variance_fields"),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesVarianceFieldsModelSelector extends QueryBuilder {
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromNearbyVenuesVarianceFields() {
  return new NearbyVenuesVarianceFieldsModelSelector()
}

export const nearbyVenuesVarianceFieldsModelPrimitives = selectFromNearbyVenuesVarianceFields().lat.long
