/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VenuesStddevFieldsBase
 * auto generated base class for the model VenuesStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const VenuesStddevFieldsModelBase = ModelBase
  .named('VenuesStddevFields')
  .props({
    __typename: types.optional(types.literal("venues_stddev_fields"), "venues_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromVenuesStddevFields() {
  return new VenuesStddevFieldsModelSelector()
}

export const venuesStddevFieldsModelPrimitives = selectFromVenuesStddevFields().lat.long
