/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VenuesVarianceFieldsBase
 * auto generated base class for the model VenuesVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const VenuesVarianceFieldsModelBase = ModelBase
  .named('VenuesVarianceFields')
  .props({
    __typename: types.optional(types.literal("venues_variance_fields"), "venues_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromVenuesVarianceFields() {
  return new VenuesVarianceFieldsModelSelector()
}

export const venuesVarianceFieldsModelPrimitives = selectFromVenuesVarianceFields().lat.long
