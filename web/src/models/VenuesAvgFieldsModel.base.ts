/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VenuesAvgFieldsBase
 * auto generated base class for the model VenuesAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const VenuesAvgFieldsModelBase = ModelBase
  .named('VenuesAvgFields')
  .props({
    __typename: types.optional(types.literal("venues_avg_fields"), "venues_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromVenuesAvgFields() {
  return new VenuesAvgFieldsModelSelector()
}

export const venuesAvgFieldsModelPrimitives = selectFromVenuesAvgFields().lat.long
