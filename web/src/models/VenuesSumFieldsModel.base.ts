/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VenuesSumFieldsBase
 * auto generated base class for the model VenuesSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const VenuesSumFieldsModelBase = ModelBase
  .named('VenuesSumFields')
  .props({
    __typename: types.optional(types.literal("venues_sum_fields"), "venues_sum_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    lat: types.union(types.undefined, types.null, types.frozen()),
    long: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromVenuesSumFields() {
  return new VenuesSumFieldsModelSelector()
}

export const venuesSumFieldsModelPrimitives = selectFromVenuesSumFields().lat.long
